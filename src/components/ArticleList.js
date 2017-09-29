import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    static defaultProps = {
        articles: [],
    };

    state = {
        openArticleId: null
    };

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

    toggleOpenArticle = (openArticleId) => (ev) => this.setState((state) => {
        return openArticleId === state.openArticleId ? { openArticleId: null } : { openArticleId }
    })
}

export default ArticleList