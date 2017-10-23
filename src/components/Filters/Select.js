import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {selectArticle} from '../../AC/index';

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = (selected) => {
        const {selectArticle} = this.props;
        selectArticle(selected);
    };
    render() {
        const { articles } = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return <Select
            options={options}
            value={this.props.selected}
            onChange={this.handleChange}
            multi
        />
    }
}

const mapStateToProps = (state) => ({
    articles: state.articles,
    selected: state.selectedArticles
});

export default connect(mapStateToProps, {selectArticle})(SelectFilter)