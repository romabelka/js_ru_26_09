import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterArticle} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null
    }

    handleChange = selected => {
        console.log("---handleChange")
        this.setState({ selected })

        const {filterArticle} = this.props
        filterArticle({ids: selected.map(s => s.value)})
    }

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.state.selected}
            onChange={this.handleChange}
            multi
        />
    }
}

export default connect((state) => ({
    articles: state.articles,
    //selected: state.filter.selected
}), {filterArticle})(SelectFilter)