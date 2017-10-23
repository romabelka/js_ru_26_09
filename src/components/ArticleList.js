import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'

class ArticleList extends Accordion {

    static propTypes = {
        articles: PropTypes.array.isRequired

    };

    constructor(props) {

        super(props);

        this.state = {
            openItemId: props.articles[0].id,
            error: null
        };

    }

    render() {

        const {articles, filters} = this.props;

        let filteredArticles = articles.filter( article => {

            let { selectedArticles, selectedRange }  = filters;

            if (selectedArticles.length && !selectedArticles.includes(article.id)) {
                return false;
            }

            if (selectedRange.from && selectedRange.from.toISOString() > article.date) {
                return false;
            }

            if (selectedRange.to && selectedRange.to.toISOString() < article.date) {
                return false;
            }

            return true;


        });

        if (this.state.error) return <h2>{this.state.error}</h2>;

        if (!filteredArticles.length) return <h3>No Articles</h3>;

        const articleElements = filteredArticles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {article.id === this.state.openItemId}
                     onButtonClick = {this.toggleOpenItemMemoized(article.id)}
            />
        </li>);

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

}


export default connect((state) => {
    return ({
        articles: state.articles,
        filters: state.filters
    })
})(ArticleList)