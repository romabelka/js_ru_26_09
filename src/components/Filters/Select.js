import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {selectArticle} from '../../AC'
import {filterByDate} from '../../utils'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };



    handleChange = selected => {
        const {selectArticle} = this.props;
        console.log(selected)
        selectArticle(selected);
    }

    render() {
        console.log(this.props);
        const { articles, range } = this.props

        const filteredArticles = filterByDate(articles, range)

        const options = filteredArticles.map(article => ({
            label: article.title,
            value: article.id
        }))
        console.log(options);

        return <Select
            options={options}
            value={this.props.selected}
            onChange={this.handleChange}
            multi
        />
    }
}

SelectFilter.defaultProps = {
    selected: [],
    range: {from: null, to: null}
}


export default connect((state) => ({
    articles: state.articles,
    selected: state.selectedArticles,
    range: state.range
}), {selectArticle})(SelectFilter)