import React, {Component} from 'react'
import Select from 'react-select'
import DayPicker, { DateUtils } from 'react-day-picker';
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import articles from '../fixtures'
import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css'

class App extends Component {
    state = {
        from: null,
        to: null,
        selected: null
    }

    render() {
        const { from, to, selected } = this.state;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <h1>App name</h1>
                <DayPicker onDayClick={this.handleDayClick} selectedDays={[from, { from, to }]} />
                {
                    from && to &&
                    <div>
                        <span>
                            <b>Date selected: </b>
                            from: {from.toLocaleDateString()} to: {to.toLocaleDateString()}
                        </span>
                        <div><a href="#" onClick={this.handleResetClick}>Reset</a></div>
                    </div>
                }
                <UserForm />
                <Select options = {options} value = {selected} onChange = {this.handleChange} multi/>
                <ArticleList articles = {articles}/>
                <ArticlesChart articles = {articles}/>
            </div>
        )
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    handleResetClick = e => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null
        });
    };

    handleChange = selected => this.setState({ selected })
}

App.propTypes = {

}

export default App