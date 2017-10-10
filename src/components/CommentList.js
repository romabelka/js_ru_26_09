import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

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
        <ul>
            {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
        </ul>
    ) : <h3>No comments yet</h3>

    return (
        <div>
            <CommentForm />
            {body}
            <CommentForm />
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