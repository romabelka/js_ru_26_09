import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

class ArticleList extends Component {
    static defaultProps = {
        articles: []
    }

    state = {
        openArticleId: null
    }

    render() {
        if (!this.props.articles.length) return <h3>No articles</h3>
        const articlesElements = this.props.articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {this.state.openArticleId === article.id}
                    onButtonClick = {this.toggleOpenArticle(article.id)}
                />
            </li>
        ))
        return (
            <div>
                <ul>
                    {articlesElements}
                </ul>
            </div>
        )
    }

    toggleOpenArticle = (openArticleId) => (ev) => {
        if (openArticleId === this.state.openArticleId) {
            this.setState({ openArticleId: null })
        } else {
            this.setState({ openArticleId })
        }
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array
}

export default ArticleList