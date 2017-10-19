import React, { Component } from 'react'
import {connect} from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import moment from 'moment'
import {filtersDateArticles} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    state = {
        from: null,
        to: null
    }

    handleDayClick = (day) => {
        const {state, state: {from, to}, props: {dispatch}} = this
        this.setState(DateUtils.addDayToRange(day, state))

        if(from){
            dispatch(filtersDateArticles(DateUtils.addDayToRange(day, state)))
        }
    }

    render() {
        const { from, to } = this.state
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    articles: state.articles,
    filtersDate: state.filtersDate,
})

export default connect(mapStateToProps)(DateRange)