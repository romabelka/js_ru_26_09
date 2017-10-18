import React, { Component } from 'react'
import DateRange from './DateRange'
import SelectFilter from './Select'

class Filters extends Component {
    static propTypes = {
    };

    render() {
        return (
            <div>
                <SelectFilter selected = {[]} range = {this.props.range} articles = {this.props.articles}/>
                <DateRange range = {this.props.range}/>
            </div>
        )
    }
}

export default Filters