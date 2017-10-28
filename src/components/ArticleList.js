import React from 'react'
import PropTypes from 'prop-types'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import {filteredArticlesSelector, articlesLoading} from '../selectors'
import {loadAllArticles} from '../AC'
import Loader from './common/Loader'

class ArticleList extends Accordion {
    constructor(props) {
        super(props)
        this.state = {
            error: null
        }
    }

    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        console.log('---', 'article list render')
        const {articles, loading} = this.props
        if (this.state.error) return <h2>{this.state.error}</h2>
        if (loading) return <Loader />

        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <NavLink to = {`/articles/${article.id}`} activeStyle = {{color: 'red'}}>{article.title}</NavLink>
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

export default connect((state) => {
    return {
        articles: filteredArticlesSelector(state),
        loading: articlesLoading(state)
    }
}, { loadAllArticles })(ArticleList)