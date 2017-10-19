import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {applyDateFilter} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    static propTypes = {
        from: PropTypes.instanceOf(Date),
        to: PropTypes.instanceOf(Date)
    };

    handleDayClick = (day) => {
        const {applyDateFilter} = this.props;
        applyDateFilter(DateUtils.addDayToRange(day, this.props));
    }

    render() {
        const { from, to } = this.props
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

export default connect((state) => ({
    from: state.dateFilter.from,
    to: state.dateFilter.to
}), { applyDateFilter })(DateRange)