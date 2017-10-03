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
        if (openArticleId === this.state.openArticleId) {
            return { isOpen: !this.state.isOpen }
        } else {
            return { openArticleId: openArticleId, isOpen: true }
        }
    })


    render() {
        if (!this.props.articles.length) return <h3>No articles</h3>

        const articleElements = this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={this.state.openArticleId === article.id && this.state.isOpen}
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