import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.object.isRequired
    };

    handleChange = selected => this.props.changeSelection(selected.map(option => {console.log(option);return option.value}))

    render() {
        const { articles, selected } = this.props
        // получение массива из объекта
        const arrArticles = Object.keys(articles).map(index => articles[index])

        const options = arrArticles.map(article => ({
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

export default connect(state => ({
    selected: state.filters.selected,
    articles: state.articles
}), { changeSelection })(SelectFilter)