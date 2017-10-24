import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'
import {filteredArticlesSelector} from '../selectors'

class ArticleList extends Accordion {
    constructor(props) {
        super(props)
        this.state = {
            openItemId: props.articles[0],
            error: null
        }
    }

    render() {
        console.log('---', 'article list render', this.props)
        const {articles} = this.props
        if (this.state.error) return <h2>{this.state.error}</h2>

        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((id) => <li key={id}>
            <Article id = {id}
                     isOpen = {id === this.state.openItemId}
                     onButtonClick = {this.toggleOpenItemMemoized(id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    componentDidCatch(error) {
        console.log('---', error)
        this.setState({
            error: error.message
        })
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect((state) => {
    console.log('---', 'connect')
    return {
        articles: filteredArticlesSelector(state)
    }
})(ArticleList)