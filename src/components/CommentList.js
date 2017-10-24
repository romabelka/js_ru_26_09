import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

function CommentList(props) {
    const {comments, isOpen, toggleOpen, articleId} = props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({ isOpen, comments, articleId })}
        </div>
    )
}

function getBody({comments, isOpen, articleId}) {
    if (!isOpen) return null

    const body = comments.length ? (
        <ul>
            {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
        </ul>
    ) : <h3>No comments yet</h3>

    return (
        <div>
            {body}
            <CommentForm articleId={articleId}/>
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