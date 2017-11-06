import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import ArticlesPage from './routes/ArticlesPage'
import CommentsPage from './routes/CommentsPage'
import Filters from './Filters'
import UserForm from './UserForm'
import Counter from './Counter'
import Menu, {MenuItem} from './Menu'
import {dict} from '../dictionary'

class App extends Component {
    static childContextTypes = {
        user: PropTypes.string,
        dict: PropTypes.object
    }

    getChildContext() {
        return {
            user: this.state.username,
            dict: dict[this.state.lang]
        }
    }

    state = {
        username: '',
        lang: "eng"
    }

    langArray = [
        {
            "key": "eng",
            "name": "ENGLISH"
        },
        {
            "key": "rus",
            "name": "РУССКИЙ"
        },
        {
            "key": "ita",
            "name": "ITALIANO"
        }
    ]

    handleUserChange = username => this.setState({ username })

    render() {
        const langButtons = this.langArray.map((lang) =>
            <button key={lang.key} value={lang.key} onClick={this.changeLang} style={this.state.lang==lang.key ? {backgroundColor: 'green'} : {}}>
                {lang.name}
            </button>)


        return (
            <div>
                <h1>App name</h1>
                {langButtons}
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
    changeLang = (ev) => {
        this.setState({ lang: ev.target.value })
    }
}

App.propTypes = {

}

export default App