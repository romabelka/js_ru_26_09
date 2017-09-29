import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentsList'

class Article extends Component {

    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            date: PropTypes.string.isRequired
        }).isRequired,
        isOpen: PropTypes.bool,
        onButtonClick: PropTypes.func
    };

    static defaultProps = {
        article: {
            title: "Default title",
            text: "Default text",
            date: null
        },
        isOpen: false,
        onButtonClick: void 0
    };

    render() {
        const {article, isOpen, onButtonClick} = this.props

        const body = isOpen && <section>{article.text}</section>

        const comments = isOpen && <CommentsList comments = {article.comments} />



        return (
            <div>
                <h2>
                    {article.title}
                    &#160;
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
                {comments}
            </div>
        )
    }
}


export default Article