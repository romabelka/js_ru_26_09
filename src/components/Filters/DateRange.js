import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {filterArticle} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    state = {
        from: null,
        to: null
    }

    handleDayClick = (day) => {
        this.setState(DateUtils.addDayToRange(day, this.state))
        const {filterArticle} = this.props
        filterArticle({from: this.state.from, to: this.state.to})
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
// ()=>{}
export default connect(null, {filterArticle})(DateRange)