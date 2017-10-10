import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import moment from 'moment';
import LocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ru';

import 'react-day-picker/lib/style.css';

export default class RangePicker extends React.Component {
    state = {
        from: null,
        to: null,
    };
    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };
    handleResetClick = e => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    };
    render() {
        const { from, to } = this.state;
        return (
            <div className="RangeExample">
                {!from && !to && <p>Выберите <strong>начальную дату</strong>.</p>}
                {from && !to && <p>Выберите <strong>конечную дату</strong>.</p>}
                {from &&
                to &&
                <p>
                    Вы выбрали с
                    {' '}
                    {moment(from).format('L')}
                    {' '}
                    по
                    {' '}
                    {moment(to).format('L')}
                    .
                    {' '}<a href="." onClick={this.handleResetClick}>Сбросить</a>
                </p>}
                <DayPicker
                    localeUtils={LocaleUtils}
                    locale="ru"
                    numberOfMonths={1}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                />
            </div>
        );
    }
}