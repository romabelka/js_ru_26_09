import React, {Component} from 'react'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import ArticlesPage from './routes/ArticlesPage'
import CommentsPage from './routes/CommentsPage'
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
                    <li><NavLink to = '/comments/1' activeStyle = {{color: 'red'}}>comments</NavLink></li>
                </ul>
                <UserForm />
                <Switch>
                    <Redirect from = '/' to = '/articles' exact />
                    <Route path = '/counter' component = {Counter}/>
                    <Route path = '/filters' component = {Filters}/>
                    <Route path = '/articles/new' render = {this.getNewArticle}/>
                    <Route path = '/articles' component = {ArticlesPage}/>
                    <Route path = '/comments' component = {CommentsPage}/>
                    <Route path = '*' render = {this.notFound}/>
                </Switch>
            </div>
        )
    }

    getNewArticle = () => <h1>New Article Page</h1>
    notFound = () => <h1>Not Found</h1>
}

App.propTypes = {

}

export default App