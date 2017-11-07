import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import ArticlesPage from './routes/ArticlesPage'
import CommentsPage from './routes/CommentsPage'
import Filters from './Filters'
import UserForm from './UserForm'
import Counter from './Counter'
import Menu, {MenuItem} from './Menu'
import LangProvider from './LangProvider'

class App extends Component {
    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    state = {
        username: '',
        language: 'ru'
    }
    changeLanguage = language => ev => this.setState({language})

    handleUserChange = username => this.setState({username})

    render() {
        return (
            <LangProvider language={this.state.language}>
                <div>
                    <h1>App name</h1>
                    <ul>
                        <li onClick={this.changeLanguage('en')}>English</li>
                        <li onClick={this.changeLanguage('ru')}>Russian</li>
                    </ul>
                    <Menu>
                        <MenuItem to='/counter'>counter</MenuItem>
                        <MenuItem to='/filters'>filters</MenuItem>
                        <MenuItem to='/articles'>articles</MenuItem>
                        <MenuItem to='/comments'>comments</MenuItem>
                    </Menu>
                    <UserForm value={this.state.username} onChange={this.handleUserChange}/>
                    <Switch>
                        <Redirect from='/' to='/articles' exact/>
                        <Route path='/counter' component={Counter}/>
                        <Route path='/filters' component={Filters}/>
                        <Route path='/articles/new' render={this.getNewArticle}/>
                        <Route path='/articles' component={ArticlesPage}/>
                        <Route path='/comments' component={CommentsPage}/>
                        <Route path='/error' render={this.getError}/>
                        <Route path='*' render={this.notFound}/>
                    </Switch>
                </div>
            </LangProvider>
        )
    }

    getNewArticle = () => <h1>New Article Page</h1>
    notFound = () => <h1>Not Found</h1>
    getError = () => <h1>Some Error</h1>
}

App.propTypes = {}

export default App