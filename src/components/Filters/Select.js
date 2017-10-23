import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import 'react-select/dist/react-select.css'

import { selectArticles }  from "../../AC";

import {connect} from "react-redux";

class SelectFilter extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired,
        selectedArticles: PropTypes.array
    };

    handleChange = (selected) => this.props.selectArticles( selected.map( article => article.value ) );


    render() {
        const { articles, selectedArticles } = this.props;

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return <Select
            options={options}
            value={selectedArticles}
            onChange={this.handleChange}
            multi
        />
    };
}


export default connect( (state) => ({ articles: state.articles, selectedArticles: state.filters.selectedArticles }), { selectArticles })(SelectFilter)