import React, {Component} from 'react'
import ArticleList from './ArticleList'
import Filters from './Filters'
import UserForm from './UserForm'
import Counter from './Counter'

class App extends Component {
    render() {
        return (
            <div>
                <h1>App name</h1>
                <UserForm />
                <Counter />
                <Filters articles = {[]}/>
                <ArticleList />
            </div>
        )
    }
}

App.propTypes = {

}

export default App