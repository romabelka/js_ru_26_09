import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'

function CommentList(props) {
    const {comments, isOpen, toggleOpen} = props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({ isOpen, comments })}
        </div>
    )
}

function getBody({comments, isOpen}) {
    if (!isOpen) return null

    const body = comments.length ? (
        <div>
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
            <CommentForm />
        </div>
    ) : <h3>No comments yet</h3>

    return (
        <div>
            {body}
        </div>
    )
}


CommentList.defaultProps = {
    comments: []
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
}

export default toggleOpen(CommentList)