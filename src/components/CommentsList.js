import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'


class CommentsList extends Component {

    state = {
        isOpen: false
    };

    render() {

        // if (!this.props.comments.length) return <h3>Your comment will be the first =)</h3>

        console.debug("comments.length=" + this.props.comments.length);
        //const {comments} = this.props.comments
        const commentElements = this.props.comments.map(comment => (
                <li key={comment.id}>
                    <Comment comment={comment}/>
                </li>
        ));

        return (
            <ul>
                {commentElements}
            </ul>
        )
    }
}

CommentsList.propTypes = {
    comments: PropTypes.array.isRequired
};

CommentsList.defaultProps = {
    comments: []
};

export default CommentsList