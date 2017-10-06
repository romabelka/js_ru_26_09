import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import articles from '../fixtures'

class App extends Component {
    render() {
        return (
            <div>
                <h1>App name</h1>
                <UserForm />
                <ArticleList articles={articles}/>
                <ArticlesChart articles={articles}/>
            </div>
        )
    }
}

App.propTypes = {

}

export default App