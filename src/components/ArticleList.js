import React from 'react'
import accordion from '../decorators/accordion'
import Article from './Article'
import PropTypes from 'prop-types'

function ArticleList (props) {

    return (
        getArticlesListContent(props)
    );

}

function  getArticlesListContent(props) {

    const {articles, openArticleId, toggleOpenArticle} = props;

    if (!articles.length) return <h3>No articles</h3>;

    const articlesList = articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {openArticleId === article.id}
                onButtonClick = {toggleOpenArticle(article.id)}
            />
        </li>
    ));

    return <ul>{articlesList}</ul>;
}


ArticleList.defaultProps = {
    articles: []
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default accordion(ArticleList);