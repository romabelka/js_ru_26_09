import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component {
    static defaultProps = {
        comments: [],
        defaultOpen: true
    }

    constructor(props) {
        super(props)
        this.state = {
            isCommentsOpen: props.defaultOpen
        }
    }

    state = {
        isCommentsOpen: false
    }

    render() {
        const { comments } = this.props
        const isCommentsOpen = this.state.isCommentsOpen

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
                <button onClick={this.toggleComments}>
                    { isCommentsOpen ? 'close' : 'open'}
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

    /**
     * Открывает/закрывает комментарии у статьи
     */
    toggleComments = () => {
        this.setState({ isCommentsOpen: !this.state.isCommentsOpen })
    }
}

CommentList.propTypes = {
    comments: PropTypes.array,
}

export default CommentList