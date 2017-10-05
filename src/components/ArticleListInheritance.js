import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpenArticleClass from '../decorators/toggleOpenArticleClass'

class ArticleListInheritance extends toggleOpenArticleClass {
  
    static defaultProps = {
        articles: [],
    }

    render() {
      
        if (!this.props.articles.length) return <h3>No articles</h3>

        const articleElements = this.props.articles.map(article => (
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

ArticleListInheritance.propTypes = {

    articles: PropTypes.array.isRequired
}

export default ArticleListInheritance
