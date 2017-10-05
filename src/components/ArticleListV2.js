import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import ArticlesAccordion from '../helpers/ArticlesAccordion'

class ArticleListV2 extends ArticlesAccordion {
    static defaultProps = {
        articles: [],
    }

    state = {
        openArticleId: null
    }

    render() {
        const articles = this.props.articles
        if (!articles.length) return <h3>No articles</h3>

        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {this.state.openArticleId === article.id}
                    onButtonClick = {this.toggleOpenArticle(article.id)}
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

ArticleListV2.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleListV2