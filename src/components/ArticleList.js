import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    static defaultProps = {
        articles: [],
    }

    state = {
        openArticleId: null
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillUpdate(_, nextState) {
        console.log('---', nextState.openArticleId)
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

export default accordion(ArticleList)