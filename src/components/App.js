import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import ArticlesPage from './routes/ArticlesPage'
import CommentsPage from './routes/CommentsPage'
import Filters from './Filters'
import UserForm from './UserForm'
import LanguageSwitcher from './LanguageSwitcher'
import Counter from './Counter'
import Menu, {MenuItem} from './Menu'

class App extends Component {
    static childContextTypes = {
        user: PropTypes.string,
        language: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.username,
            language: this.state.language
        }
    }

    state = {
        username: '',
        language: 'en'
    }

    handleUserChange = username => this.setState({ username })

    handleLanguageChange = language => this.setState({ language })

    render() {
        console.log('---', 1)
        return (
            <div>
                <LanguageSwitcher handleLanguageChange={this.handleLanguageChange} />
                <h1>App name</h1>
                <Menu>
                    <MenuItem to = '/counter' >counter</MenuItem>
                    <MenuItem to = '/filters' >filters</MenuItem>
                    <MenuItem to = '/articles' >articles</MenuItem>
                    <MenuItem to = '/comments' >comments</MenuItem>
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