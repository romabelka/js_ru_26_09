import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import ArticlesPage from './routes/ArticlesPage'
import CommentsPage from './routes/CommentsPage'
import Filters from './Filters'
import UserForm from './UserForm'
import Counter from './Counter'
import Menu, {MenuItem} from './Menu'

class App extends Component {
    static childContextTypes = {
        user: PropTypes.string,
        dictionary: PropTypes.object
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    static contextTypes = {
        dictionary: PropTypes.object
    }

    state = {
        username: ''
    }

    handleUserChange = username => this.setState({ username })

    render() {
        console.log('---', '1',this.context.dictionary)
        const dict = this.context.dictionary
        return (
            <div>
                <h1>{dict.app_name}</h1>
                <Menu>
                    <MenuItem to = '/counter' >{dict.counter}</MenuItem>
                    <MenuItem to = '/filters' >{dict.filters}</MenuItem>
                    <MenuItem to = '/articles' >{dict.articles}</MenuItem>
                    <MenuItem to = '/comments' >{dict.comments}</MenuItem>
                </Menu>
                <UserForm value = {this.state.username} onChange = {this.handleUserChange}/>
                <Switch>
                    <Redirect from = '/' to = '/articles' exact />
                    <Route path = '/counter' component = {Counter}/>
                    <Route path = '/filters' component = {Filters}/>
                    <Route path = '/articles/new' render = {this.getNewArticle}/>
                    <Route path = '/articles' component = {ArticlesPage}/>
                    <Route path = '/comments' component = {CommentsPage}/>
                    <Route path = '/error' render = {this.getError}/>
                    <Route path = '*' render = {this.notFound}/>
                </Switch>
            </div>
        )
    }

    getNewArticle = () => <h1>New Article Page</h1>
    notFound = () => <h1>Not Found</h1>
    getError = () => <h1>Some Error</h1>
}

App.propTypes = {

}

export default App