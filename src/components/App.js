import React, {Component} from 'react'
import {Route, NavLink} from 'react-router-dom'
import ArticlesPage from './routes/ArticlesPage'
import CommentListPage from './routes/CommentListPage'
import Filters from './Filters'
import UserForm from './UserForm'
import Counter from './Counter'

class App extends Component {
    render() {
        return (
            <div>
                <h1>App name</h1>
                <ul>
                    <li><NavLink to = '/counter' activeStyle = {{color:'red'}}>counter</NavLink></li>
                    <li><NavLink to = '/filters' activeStyle = {{color:'red'}}>filters</NavLink></li>
                    <li><NavLink to = '/articles' activeStyle = {{color:'red'}}>articles</NavLink></li>
                    <li><NavLink to = '/comments/1' activeStyle = {{color:'red'}}>comments</NavLink></li>
                </ul>
                <UserForm />
                <Route path = '/counter' component = {Counter}/>
                <Route path = '/filters' component = {Filters}/>
                <Route path = '/articles' component = {ArticlesPage}/>
                <Route path = '/comments/:pageNum' children = {this.getCommentListPage}/>
            </div>
        )
    }

    getCommentListPage = ({ match }) => {
        console.log('---', 'CommentListPage match', match)
        if (!match) return null
        return <CommentListPage pageNum={match.params.pageNum} key = {match.params.pageNum} />
    }
}

App.propTypes = {

}

export default App