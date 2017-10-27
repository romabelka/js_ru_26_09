import React, { Component } from 'react'
import ArticleList from '../ArticleList'
import Article from '../Article'
import {Route} from 'react-router-dom'

class ArticlesPage extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', 'ArticlesPage', this.props.match)
        return (
            <div>
                <ArticleList/>
                <Route path = {`${this.props.match.url}/:id`} children = {this.getArticlePage} />
            </div>
        )
    }

    getArticlePage = ({ match }) => {
        console.log('---', 'Article match', match)
        if (!match) return <h2>Please select an article</h2>
        return <Article id={match.params.id} isOpen key = {match.params.id} />
    }

}

export default ArticlesPage