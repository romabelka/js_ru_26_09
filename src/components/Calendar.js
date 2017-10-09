import React, {Component} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import moment from "moment"
import "moment/locale/ru"

import 'react-day-picker/lib/style.css';


const WEEKDAYS_LONG = {
    ru: [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ]
};

const WEEKDAYS_SHORT = {
    ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
};

const MONTHS = {
    ru: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ]
};
const FIRST_DAY_OF_WEEK = {
    ru: 1
};

// Translate aria-labels
const LABELS = {
    ru: { nextMonth: 'следующий месяц', previousMonth: 'предыдущий месяц' },
};

class Calendar extends Component {

    state = {
        from: null,
        to: null,
        locale: "ru"
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

        const { from, to, locale } = this.state;

        moment().locale(locale);

        return (
            <div className="RangeExample">
                {!from && !to && <p>Укажите <strong>начало</strong> периода.</p>}
                {from && !to && <p>Укажите <strong>окончание</strong> периода.</p>}
                {from &&
                to &&
                <p>
                    Вы выбрали период с
                    {' '}
                    {moment(from).format('LL')}
                    {' '}
                    по
                    {' '}
                    {moment(to).format('LL')}
                    {' '}<a href="." onClick={this.handleResetClick}>Заново</a>
                </p>}
                <DayPicker
                    locale={locale}
                    months={MONTHS[locale]}
                    weekdaysLong={WEEKDAYS_LONG[locale]}
                    weekdaysShort={WEEKDAYS_SHORT[locale]}
                    firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]}
                    labels={LABELS[locale]}
                    numberOfMonths={2}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                />
            </div>
        );
    }
}

export default Calendar