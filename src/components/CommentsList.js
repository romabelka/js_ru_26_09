import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentsList extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired
    };

    static defaultProps = {
        comments: []
    };

    state = {
        isCommentsShow: false
    };

    toggleDisplayComments = () => {
        this.setState((state) => {
            return {
                isCommentsShow: !state.isCommentsShow
            }
        })
    };




    render() {
        if (!this.props.comments.length) return <h4>No comments yet</h4>

        const comments = this.props.comments.map(comment => (
            <li key = {comment.id}>
                <Comment comment={comment} />
            </li>
        ));

        const commentsList = this.state.isCommentsShow && <ul>{comments}</ul>

        return (
            <div>
                <h4>
                    Comments
                    &#160;
                    <button onClick={this.toggleDisplayComments}>
                        {this.state.isCommentsShow ? 'Hide comments' : 'Show comments'}
                    </button>
                </h4>
                {commentsList}
            </div>
        )
    }

}

export default CommentsList