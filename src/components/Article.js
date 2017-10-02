import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            date: PropTypes.string.isRequired,
            comments: PropTypes.array
        }).isRequired
    }

    state = {
        openComments: false
    }

    onCommentsButtonClick = () => this.setState({ openComments: !this.state.openComments })

    render() {

        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen && <section>{article.text}</section>
        const comments = article.comments ?
            article.comments.map(comment => (
                <Comment
                    key={comment.id}
                    user={comment.user}
                    text={comment.text}
                />
            )) :
            <h3>No comments</h3>
        const commentsList = this.state.openComments && <ul>{comments}</ul>
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
                <button onClick={this.onCommentsButtonClick}>
                    {this.state.openComments ? 'close comments' : 'open comments'}
                </button>
                {commentsList}
            </div>
        )
    }
}


export default Article