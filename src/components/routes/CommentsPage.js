import React, { Component } from 'react'
import Comment from '../Comment'
import {Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadComments} from '../../AC'
import {commentsLoading, commentsForPage, commentsTotal} from '../../selectors'
import Loader from '../common/Loader'

class CommentsPage extends Component {
    static propTypes = {

    };

    componentDidMount() {
        this.checkNeedToLoad(this.props);
        //if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
        // this.props.loadComments(nextProps.match.params.page)
        //}
    }

    componentWillReceiveProps(nextProps) {
        this.checkNeedToLoad(nextProps);
        //if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
        // this.props.loadComments(nextProps.match.params.page)
        //}
    }

    render() {
        const { loading, comments } = this.props;
        if (loading || !this.checkCommentsList(comments)) return <Loader />

        const body = this.getBody(this.props)


        return (
            <div>
                {body}
            </div>
        )
    }

    getBody = ({ comments, commentsTotal }) => {
        var pages = [];
        for (var i=1; i<=Math.ceil(commentsTotal/5); i++) {
            pages.push(i);
        }
        return comments && comments.size>0 ? (
            <div>
                <ul>
                    {comments.toArray().map(id => <li key = {id}><Comment id = {id} /></li>)}
                </ul>
                <div>
                    {pages.map(page =>
                        <span key = {page}><NavLink to = {`/comments/${page}`} activeStyle = {{color:'red'}}>{page}</NavLink> | </span>)}
                </div>
            </div>
        ) : <h3>No comments yet</h3>
    }

    checkNeedToLoad = ({ loadComments, match, comments}) => {
        if (!this.checkCommentsList(comments)) {
            loadComments(match.params.page)
        }
    }
    checkCommentsList = (list) => {
        return (list.reduce((bool, item) => bool = !item ? false : bool, true)
            && list.size!=0)
    }

}

export default connect((state, ownProps) => {
    return {
        commentsTotal: commentsTotal(state),
        comments: commentsForPage(state, (ownProps.match.params.page - 1) * 5, 5),
        loading: commentsLoading(state)
    }
}, { loadComments })(CommentsPage)