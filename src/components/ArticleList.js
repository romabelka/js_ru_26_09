import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpenArticle from '../decorators/toggleOpenArticle'

class ArticleList extends Component {
  
    static defaultProps = {
        articles: [],
    }

    render() {
        if (!this.props.articles.length) return <h3>No articles</h3>

        const articleElements = this.props.articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {this.props.openArticleId === article.id}
                    onButtonClick = {this.props.toggleOpenArticle(article.id)}
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

export default toggleOpenArticle(ArticleList)
