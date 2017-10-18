import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {changeRange} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {





    render() {
        const { from, to } = this.props.range
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

    handleDayClick = (day) => {
        console.log(this.props);
        const {changeRange, range} = this.props;
        const {from = null, to = null} = range;
        changeRange(DateUtils.addDayToRange(day, {'from': from, 'to' : to}))
    }
}

DateRange.defaultProps = {
    range: {from: null, to: null}
}


export default connect((state) => ({range: state.range}), { changeRange })(DateRange)