import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

class ArticleList extends Component {
    static defaultProps = {
        articles: [],
    }

    state = {
        openArticleId: null,
        isOpen: false
    }

    toggleOpenArticle = (openArticleId) => () => this.setState(() => {
        return openArticleId === this.state.openArticleId ?
            { openArticleId: null } :
            { openArticleId }
    })


    render() {
        if (!this.props.articles.length) return <h3>No articles</h3>

        const articleElements = this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={this.state.openArticleId === article.id}
                    onButtonClick={this.toggleOpenArticle(article.id)}
                />
            </li>
        ))
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleList