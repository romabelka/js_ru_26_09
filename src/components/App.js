import React, {Component} from 'react'
import Select from 'react-select'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import RangeDayPicker from './RangeDayPicker'
import articles from '../fixtures'
import 'react-select/dist/react-select.css'


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
                <UserForm />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi/>
                <RangeDayPicker />
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