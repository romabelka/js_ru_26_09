import React, {Component} from 'react'
import CalendarSelectRange from './CalendarSelectRange'
import Select from 'react-select'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'react-select/dist/react-select.css'


class App extends Component {
    state = {
        selected: null
    };

    render() {
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div>
                <h1>App name</h1>
                <CalendarSelectRange />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi/>
                <ArticleList articles = {articles}/>
            </div>
        )
    }

    handleChange = selected => this.setState({ selected })
}

export default App