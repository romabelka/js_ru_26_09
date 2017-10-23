import React, { Component } from 'react'
import DateRange from './DateRange'
import SelectFilter from './Select'

class Filters extends Component {
    static propTypes = {
    };

    render() {
        return (
            <div>
                <SelectFilter />
                <DateRange />
            </div>
        )
    }
}

export default Filters