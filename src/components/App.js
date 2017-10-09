import React, {Component} from 'react'
import Select from 'react-select'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import articles from '../fixtures'
import 'react-select/dist/react-select.css'
import DayPicker from './DayPicker'

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
                <DayPicker />
                <UserForm />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi/>
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