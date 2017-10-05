import React from 'react'
import Article from './Article';
import PropTypes from 'prop-types';
import AccordionInherit from './AccordionInherit';

class ArticleListInherit extends AccordionInherit {
    static defaulProps = {
        articles: []
    };
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        if (!this.props.articles.length) return <h3>No articles</h3>;
        const articleElements = this.props.articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {this.state.openElementId === article.id}
                    onButtonClick = {this.toggleOpenElement(article.id, this.state.openElementId === article.id)}
                />
            </li>
        ));
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default ArticleListInherit;