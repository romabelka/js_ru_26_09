import React, {Component} from 'react'
import Comment from './Comment'
// import MarkdownTextarea from 'react-markdown-textarea'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from "./NewCommentForm";

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
    if (!isOpen) return null;

    let value = 'd';

    const body = comments.length ? (
        <ul>
            {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
        </ul>
    ) : <h3>No comments yet</h3>

    return (
        <div>
            {body}
            <NewCommentForm/>
            {/*<MarkdownTextarea value="vgs" initialValue='New Comment' placeholder='A cool placeholder'/>*/}
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