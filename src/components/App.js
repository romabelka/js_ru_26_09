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
        words: PropTypes.array
    }

    getChildContext() {
        return {
            user: this.state.username,
            words: this.state.words
        }
    }

    state = {
        username: '',
        words: {
            'mainMenu': 'Main menu',
            'user': 'User',
            'username': 'Username',
            'hideComments': 'hide comments',
            'showComments': 'show comments'
        }
    }

    handleUserChange = username => this.setState({ username })

    pickEng = () => {
        this.setState({
            words: {
                'mainMenu': 'Main menu',
                'user': 'User',
                'username': 'Username',
                'hideComments': 'hide comments',
                'showComments': 'show comments'
            }    
        })
    }

    pickRus = () => {
        this.setState({
            words: {
                'mainMenu': 'Главное меню',
                'user': 'Пользователь',
                'username': 'Имя пользователя',
                'hideComments': 'Спрятать комментарии',
                'showComments': 'Показать комментарии'
            }
        })
    }

    render() {
        console.log('---', 1)
        return (
            <div>
                <h1>App name</h1>
                <div>
                    <button onClick={this.pickEng}>Eng</button>
                    <button onClick={this.pickRus}>Rus</button>
                </div>
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