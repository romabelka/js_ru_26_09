import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {commentsLoaded, commentsLoading, createCommentSelector} from '../selectors'
import toggleOpen from "../decorators/toggleOpen";
import {loadAllComments} from "../AC";

function Comment({comment}) {
    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    //from connect
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}


export default connect( () => {

    const commentSelector = createCommentSelector()

    return (state, ownProps) => ({
        comment: commentSelector(state, ownProps)
    })

})(Comment)