import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import Filters from './Filters'
import UserForm from './UserForm'
import Counter from './Counter'

class App extends Component {
    render() {
        const {articles} = this.props
        return (
            <div>
                <h1>App name</h1>
                <UserForm />
                <Counter />
                <Filters articles = {articles}/>
                <ArticleList articles = {articles}/>
                <ArticlesChart articles = {articles}/>
            </div>
        )
    }
}

App.propTypes = {

}

export default App