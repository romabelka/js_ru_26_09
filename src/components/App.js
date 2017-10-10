import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import Filters from './Filters'
import UserForm from './UserForm'
import RangeDayPicker from './RangeDayPicker'
import articles from '../fixtures'

class App extends Component {
    state = {
        selected: null
    }

    render() {
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <h1>App name</h1>
                <RangeDayPicker />
                <UserForm />
                <Filters articles = {articles}/>
                <ArticleList articles = {articles}/>
                <ArticlesChart articles = {articles}/>
            </div>
        )
    }

    handleChange = selected => this.setState({ selected })
}

App.propTypes = {

}

export default App