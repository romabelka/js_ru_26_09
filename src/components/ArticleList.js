// ВАРИАНТ № 1 - декорирование //

/*import React, { Component } from 'react'
import accordion from '../decorators/accordion'
import Article from './Article'
import PropTypes from 'prop-types'


function ArticleList (props) {
    return (
        getContent(props)
    );
}

function getContent(props) {
    const {articles, openItemId, toggleOpenItem} = props;

    if (!articles) return <h3>No articles</h3>;

    const articleElements = articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {openItemId === article.id}
                onButtonClick = {toggleOpenItem(article.id)}
            />
        </li>
    ));

    return <ul>{articleElements}</ul>;
}

ArticleList.defaultProps = {
    articles: []
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default accordion(ArticleList);*/



// ВАРИАНТ №2 - наследование //
import React from 'react'
import AccordionComponent from './AccordionComponent'
import Article from './Article'
import PropTypes from 'prop-types'

class ArticleList extends AccordionComponent {
    static defaultProps = {
        articles: [],
    }

    render() {
        if (!this.props.articles.length) return <h3>No articles</h3>

        const articleElements = this.props.articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {this.state.openItemId === article.id}
                    onButtonClick = {this.toggleOpenItem(article.id)}
                />
            </li>
        ))
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleList