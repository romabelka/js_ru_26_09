import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'

class ArticleList extends Accordion {
    constructor(props) {
        super(props)
        this.state = {
            openItemId: props.articles[0].id,
            error: null
        }
    }

    render() {
        const {articles} = this.props
        if (this.state.error) return <h2>{this.state.error}</h2>

        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openItemId}
                     onButtonClick={this.toggleOpenItemMemoized(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    componentDidCatch(error) {
        console.log('---', error)
        this.setState({
            error: error.message
        })
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleList