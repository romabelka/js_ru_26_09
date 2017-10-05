import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ArticleListParent extends Component {
    static defaultProps = {
        articles: [],
    }

    state = {
        openArticleId: null
    }

    toggleOpenArticle = (id) => {
        if (this.memoizedTogglers.get(id)) return this.memoizedTogglers.get(id)

        const func = (ev) => this.setState({
            openArticleId: id === this.state.openArticleId ? null : id
        })

        this.memoizedTogglers.set(id, func)

        return func
    }

    memoizedTogglers = new Map()
}

ArticleListParent.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleListParent