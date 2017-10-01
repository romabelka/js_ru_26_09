import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component {
    static defaultProps = {
        comments: [],
        isCommentsOpen: false
    }

    render() {
    const { comments, onCommentsButtonClick, isCommentsOpen } = this.props
    let commentsElements, body;
    if (!comments.length) {
        body = <div>No comments</div>
    } else {
        commentsElements = isCommentsOpen && comments.map(comment => (
            <li key = {comment.id}>
                <Comment
                    comment = {comment}
                />
            </li>
        ))

        body = <div>
            <button onClick={onCommentsButtonClick}>
                {isCommentsOpen ? 'close' : 'open'}
            </button>
            <ul>
                {commentsElements}
            </ul>
        </div>
    }

    return (
        <div>
            <h3>Комментарии</h3>
            { body }
        </div>
    )
}
}

CommentList.propTypes = {
    comments: PropTypes.array,
    onCommentsButtonClick: PropTypes.func.isRequired,
    isCommentsOpen: PropTypes.bool
}

export default CommentList