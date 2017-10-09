import React, {Component} from 'react'
import Select from 'react-select'
import DayPicker, {DateUtils} from 'react-day-picker'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import articles from '../fixtures'
import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css'

class App extends Component {
    state = {
        selected: null,
        fromDay: null,
        toDay: null
    }

    render() {
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const {fromDay, toDay} = {fromDay: this.state.fromDay, toDay: this.state.toDay}

        const periodElements = <div>
            <DayPicker  numberOfMonths={2}
                        selectedDays={[fromDay, { fromDay, toDay }]}
                        onDayClick={this.handleDayClick}
                        fixedWeeks
            />
            <h4>Selected range:</h4>
            <h4>Начальная дата {fromDay ? fromDay.toLocaleString() : 'не задана'} </h4>
            <h4>Конечная дата {toDay ? toDay.toLocaleString() : 'не задана'} </h4>
        </div>
        return (
            <div>
                <h1>App name</h1>
                <UserForm />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi/>
                {periodElements}
                <ArticleList articles = {articles}/>
                <ArticlesChart articles = {articles}/>
            </div>
        )
    }

    handleChange = selected => this.setState({ selected })
    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, {from: this.state.fromDay, to: this.state.toDay});
        this.setState({fromDay: range.from, toDay: range.to});
    };
}

App.propTypes = {

}

export default App