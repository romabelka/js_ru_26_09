import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {applySelectFilter} from '../../AC'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        selected: PropTypes.array.isRequired
    };

    state = {
        selected: null
    }

    handleChange = selected => {
        const {applySelectFilter} = this.props
        applySelectFilter(selected)
    }

    render() {
        const { articles, selected } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            onChange={this.handleChange}
            multi
        />
    }
}

//export default SelectFilter

export default connect((state) => ({
    articles: state.articles,
    selected: state.selectFilter
}), { applySelectFilter })(SelectFilter)