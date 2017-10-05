import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import articlesAccordion from '../decorators/articlesAccordion'

class ArticleList extends Component {
    static defaultProps = {
        articles: [],
    }

    render() {
        const articles = this.props.articles
        if (!articles.length) return <h3>No articles</h3>

        const articleElements = articles.map(article => (
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

export default articlesAccordion(ArticleList)