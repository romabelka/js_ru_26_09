import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'

class ArticleList extends Accordion {
    constructor(props) {
        super(props)
        this.state = {
            openItemId: props.articles[0].id,
            error: null
        }
    }

    render() {
        const articles = (this.props.selectedArticles.length) ? this.compileSelectedArticles(this.props.selectedArticles) : this.props.articles;
        if (this.state.error) return <h2>{this.state.error}</h2>
        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
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
    compileSelectedArticles(selected) {
        const {articles} = this.props;
        const articleSelected = [];
        selected.forEach( select => {
            articleSelected.push(articles.filter( article => select.value === article.id)[0]);
        });
        return articleSelected;
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect((state) => ({
    articles: state.articles,
    selectedArticles: state.selectedArticles
}))(ArticleList)