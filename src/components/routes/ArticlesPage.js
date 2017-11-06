import React, { Component } from 'react'
import ArticleList from '../ArticleList'
import PropTypes from 'prop-types'
import Article from '../Article'
import {Route} from 'react-router-dom'

class ArticlesPage extends Component {
    static propTypes = {

    };

    static contextTypes = {
        dictionary: PropTypes.object
    }

    render() {
        console.log('---', 2)
        return (
            <div>
                <ArticleList/>
                <Route path = {`${this.props.match.url}/:id`} children = {this.getArticlePage} />
            </div>
        )
    }

    getArticlePage = ({ match }) => {
        const dict = this.context.dictionary
        if (!match) return <h2>{dict.select_article}</h2>
        console.log('---', 3)
        return <Article id={match.params.id} isOpen key = {match.params.id} />
    }

}

export default ArticlesPage