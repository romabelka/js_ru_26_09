import React from 'react';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

const initialState = {
  from: null,
  to: null,
  enteredTo: null
};

function isSelectingFirstDay(from, to, day) {
  const firstDayIsNotSelected = !from;
  const selectedDayIsBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
  const rangeIsSelected = from && to;
  return (
    firstDayIsNotSelected || selectedDayIsBeforeFirstDay || rangeIsSelected
  );
}

export default class RangeDayPicker extends React.Component {
  state = initialState;

  handleDayClick = day => {
    const { from, to } = this.state;

    if (from && to && day >= from && day <= to) {
      this.reset();
      return;
    }

    if (isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
        enteredTo: null,
      });
    } else {
      this.setState({
        to: day,
        enteredTo: day,
      });
    }
  };

  handleDayMouseEnter = day => {
    const { from, to } = this.state;

    if (!isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day,
      });
    }
  };

  reset = () => {
    this.setState(initialState);
  };

  render() {
    const { from, to, enteredTo } = this.state;
    const modifiers = { start: from, end: enteredTo };
    const disabledDays = { before: this.state.from };
    const selectedDays = [from, { from, to: enteredTo }];
    return (
      <div>
        {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
        {from && !to && <p>Please select the <strong>last day</strong>.</p>}
        {from &&
          to &&
          <p>
            You chose from
            {' '}
            {moment(from).format('DD/MM/YYYY')}
            {' '}
            to
            {' '}
            {moment(enteredTo).format('DD/MM/YYYY')}
            .
            {' '}
            <a onClick={this.reset}>Reset</a>
          </p>}
        <DayPicker
          className="Range"
          fromMonth={from}
          fixedWeeks
          selectedDays={selectedDays}
          disabledDays={disabledDays}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          onDayMouseEnter={this.handleDayMouseEnter}
        />
      </div>
    );
  }
}