import React, { Component } from 'react'
import ArticleList from '../ArticleList'
import {Route} from 'react-router-dom'

class ArticlesPage extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', 'ArticlesPage', this.props.match)
        return (
            <div>
                <ArticleList/>
                <Route path = {`${this.props.match.url}/:id`} render = {this.getArticlePage} />
            </div>
        )
    }

    getArticlePage = ({ match }) => {
        console.log('---', 'Article match', match)
        return <h1>{match.params.id}</h1>
    }
}

export default ArticlesPage