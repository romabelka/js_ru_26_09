import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import {loadCommentsByArticleId} from '../AC'
import CommentForm from './CommentForm'
import {connect} from 'react-redux'
import Loader from './common/Loader'

class CommentList extends Component {
    static defaultProps = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps({ isOpen, article, loadCommentsByArticleId }) {
        if (isOpen && !this.props.isOpen && !article.commentsLoaded) loadCommentsByArticleId(article.id)
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article: {id, commentsLoaded, comments = []}, isOpen } = this.props
        if (!isOpen) return null
        if (!commentsLoaded) return <Loader/>

        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {id} />
            </div>
        )
    }
}


export default connect(null, {loadCommentsByArticleId})(toggleOpen(CommentList))