import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool.isRequired,
        onButtonClick: PropTypes.func.isRequired
    };
    render() {
        const {article, isOpen, onButtonClick} = this.props;
        const body = isOpen && <section>
            {article.text}
            <CommentList comments={article.comments} />
        </section>;
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={onButtonClick}>{isOpen ? 'close' : 'open'}</button>
                </h2>
                {body}
                <h3>Creation date: {new Date(article.date).toDateString()}</h3>
            </div>
        )
    }
}

export default Article;