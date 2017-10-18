import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'
import {filterByDate} from '../utils'

class ArticleList extends Accordion {
    constructor(props) {
        super(props)
        this.state = {
            openItemId: props.articles[0].id,
            error: null
        }
    }

    render() {
        const {selected, articles, range} = this.props;
        const selectedIds = selected.map(v => v.value);
        const filterBySelect = article => selectedIds.indexOf(article.id) !== -1;
        const selectedArticles = selected.length ? articles.filter(filterBySelect) : articles;

        const rangedArticles = filterByDate(selectedArticles, range);


        if (this.state.error) return <h2>{this.state.error}</h2>

        if (!rangedArticles.length) return <h3>No Articles</h3>
        const articleElements = rangedArticles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {article.id === this.state.openItemId}
                     onButtonClick = {this.toggleOpenItemMemoized(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    componentDidCatch(error) {
        console.log('---', error)
        this.setState({
            error: error.message
        })
    }
}


ArticleList.defaultProps = {
    articles: [],
    selected: [],
    range: {from: null, to: null}
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect((state) => ({
    articles: state.articles,
    selected: state.selectedArticles,
    range: state.range
}))(ArticleList)