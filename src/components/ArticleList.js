import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

class ArticleList extends Component {
    static defaultProps = {
        articles: []
    };
    static propTypes = {
        articles: PropTypes.array
    };
    constructor (props) {
        super(props);

        this.state = {
            openArticleId: null
        }
    }
    render() {
        if (!this.props.articles.length) return <h3>No articles</h3>;
        const articleElements = this.props.articles.map( article => {
            let isOpen = this.state.openArticleId === article.id;
            return (
                <li key={article.id}>
                    <Article
                        article={article}
                        isOpen={isOpen}
                        onButtonClick={this.toggleArticleId(article.id, isOpen)}
                    />
                </li>
            )
        });
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
    toggleArticleId = (openArticleId, isOpen) => (ev) => this.setState({
        openArticleId : isOpen ? null : openArticleId
    });
}

export default ArticleList;