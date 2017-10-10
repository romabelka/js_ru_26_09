import React, { Component} from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import moment from 'moment'
import 'react-day-picker/lib/style.css'

class RangeDayPicker extends Component {
    state = {
        from: null,
        to: null,
    }

    /**
     * Обработка выбора дня
     * @param {object} day - выбранный день
     */
    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
    }

    /**
     * Сброс выбранных дней
     * @param e - объект события нажатия на кнопку сброса выбранных дней
     */
    handleResetClick = e => {
        e.preventDefault()
        this.setState({
            from: null,
            to: null,
        })
    }

    render() {
        const { from, to } = this.state
        return (
            <div className="RangeExample">
                {!from && !to && <p>Пожалуйста, выберите <strong>первый день</strong>.</p>}
                {from && !to && <p>Пожалуйста, выберите <strong>второй день</strong>.</p>}
                {from &&
                to &&
                <p>
                    Выбранный диапазон:
                    {' '}
                    {moment(from).format('L')}
                    {' '}
                    {' - '}
                    {' '}
                    {moment(to).format('L')}
                    .
                    {' '}<br />
                    <a href="." onClick={this.handleResetClick}>Сбросить</a>
                </p>}
                <DayPicker
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                />
            </div>
        )
    }
}

export default RangeDayPicker