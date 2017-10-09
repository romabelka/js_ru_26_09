import React, {Component} from 'react'
import Select from 'react-select'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import articles from '../fixtures'
import DayPicker from 'react-day-picker';
import { DateUtils, DayPickerInput } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import 'react-select/dist/react-select.css'

class App extends Component {
    state = {
        selected: null,
        from: null,
        to: null,
    }


    render() {
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        
        const { from, to } = this.state
        
        return (
            <div>
                <h1>App name</h1>
          
                <div className="RangeExample">
                        {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
                        {from && !to && <p>Please select the <strong>last day</strong>.</p>}
                        {from &&
                          to &&
                          <p>
                            You chose from {from.toDateString()} to {to.toDateString()} <a href="." onClick={this.handleResetClick}>Reset</a>
                          </p>}

                        <DayPicker
                          month={ new Date()}
                          numberOfMonths={1}
                          selectedDays={[from, { from, to }]}
                          onDayClick={this.handleDayClick}
                          fixedWeeks
                        />
                            
                      </div>
                <UserForm />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi/>
                <ArticleList articles = {articles}/>
                <ArticlesChart articles = {articles}/>
            </div>
        )
    }

    handleChange = selected => this.setState({ selected })

    handleDayClick = day => {
      const range = DateUtils.addDayToRange(day, this.state);
      this.setState(range);
    }

    handleResetClick = ev => {
      ev.preventDefault();
      this.setState({
        from: null,
        to: null,
      });
    }

}

App.propTypes = {

}

export default App