import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordeon from '../decorators/accordeon'

function ArticleList (props) {
    const { openArticleId, articles, toggleOpenArticle } = props

    if (!articles.length) return <h3>No articles</h3>

    const articleElements = articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {openArticleId === article.id}
                onButtonClick = {toggleOpenArticle(article.id)}
            />
        </li>
    ))
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

ArticleList.defaultProps = {
    articles: [],
}

export default accordeon(ArticleList)