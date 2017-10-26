import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import {loadAllComments} from "../AC";
import {connect} from "react-redux";
import {commentsLoaded, commentsLoading, commentsSelector} from "../selectors";
import Loader from "./common/Loader";

class CommentList extends Component {
    static defaultProps = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps({ isOpen, loaded, loading, loadAllComments }) {
        if (isOpen && !( loaded || loading )) loadAllComments()
    }

    render() {
        const {isOpen, toggleOpen, loading} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article: {id, comments}, isOpen, loading, loaded } = this.props

        if (!isOpen) return null

        if ( !loaded || loading ) return <Loader/>

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


export default connect((state) => {
    return {
        loading: commentsLoading(state),
        loaded: commentsLoaded(state)
    }
}, { loadAllComments })(toggleOpen(CommentList))