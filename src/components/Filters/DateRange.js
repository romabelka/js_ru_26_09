import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import {connect} from "react-redux";
import {selectRange} from "../../AC";

class DateRange extends Component {

    handleDayClick = (day) => {

        const { selectedRange, selectRange } = this.props;

        selectRange(DateUtils.addDayToRange(day, selectedRange));

    };



    render() {
        const { from, to } = this.props.selectedRange;

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

export default connect( (state) => ({ selectedRange: state.filters.selectedRange }), { selectRange })(DateRange)