import React, {Component} from 'react'
import {Route, NavLink} from 'react-router-dom'
import ArticlesPage from './routes/ArticlesPage'
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
                </ul>
                <UserForm />
                <Route path = '/counter' component = {Counter}/>
                <Route path = '/filters' component = {Filters}/>
                <Route path = '/articles' component = {ArticlesPage}/>
            </div>
        )
    }
}

App.propTypes = {

}

export default App