import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {filtersValueArticles} from '../../AC'
import {filtersArticlesByValue} from '../../AC'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null
    }

    handleChange = selected => {
        const { dispatch, filtersTitle } = this.props

        console.log(this.props)

        const arrIdArticles = selected.map((_item, _index) => (_item.value))

        dispatch(filtersArticlesByValue(arrIdArticles))

        console.log('filters', filtersTitle);
        this.setState({ selected })
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

const mapStateToProps = (state) => ({
    articles: state.articles,
    filtersTitle: state.filtersTitle,
})

export default connect(mapStateToProps)(SelectFilter)