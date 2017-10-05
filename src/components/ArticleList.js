import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

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
                    isOpen = {this.props.openedId === article.id}
                    onButtonClick = {this.props.toggleOpen(article.id)}
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

export default toggleOpen(ArticleList)