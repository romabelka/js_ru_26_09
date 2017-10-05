import React, { Component } from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import Accordion from '../decorators/Accordion';


function ArticleList(props) {
    if (!props.articles.length) return <h3>No articles</h3>;
    const {articles, openElementId: openArticleId, toggleOpenElement: toggleOpenArticle} = props;
    const articleElements = articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {openArticleId === article.id}
                onButtonClick = {toggleOpenArticle(article.id, openArticleId === article.id)}
            />
        </li>
    ));
    return (
        <ul>
            {articleElements}
        </ul>
    )
}
ArticleList.defaultProps = {
    articles: []
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default Accordion(ArticleList);