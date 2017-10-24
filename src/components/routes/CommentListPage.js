import React, { Component } from 'react'
import ArticleList from '../ArticleList'
import Comment from '../Comment'
import {Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadComments} from '../../AC'
import Loader from '../common/Loader'

class CommentListPage extends Component {

    static propTypes = {

    };

    componentDidMount() {
        console.log('---','CommentListPage componentDidMount props=', this.props)
        const { loading, loaded, comments, pageNum, loadComments } = this.props
        if (!loading && !comments) {
            console.log('---','CommentListPage loadComments for pageNum', pageNum)
            loadComments(pageNum)
        }
    }

    render() {
        console.log('---', 'CommentListPage', this.props)
        return (
            <div>
                <h2>Комментраии ко всем статьям</h2>
                {this.getBody()}
            </div>
        )
    }

    getBody () {
        const {loading, comments, pageNum, pageLimit, total} = this.props
        if (loading) return <Loader/>

        const body = comments && comments.length ? (
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
            </ul>
        ) : <h3>No comments</h3>

        const pageNumAsInt = parseInt(pageNum)
        const hasNext = pageLimit * pageNum < total

        const nextLink = hasNext ? <NavLink to = {`/comments/${(pageNumAsInt + 1)}`} >Next</NavLink> : 'No Next'
        const prevLink = pageNumAsInt > 1 ? <NavLink to = {`/comments/${(pageNumAsInt - 1)}`}>Prev</NavLink> : 'No Prev'

        return (
            <div>
                {body}
                <div >
                    {prevLink}
                    -----
                    {nextLink}
                </div>
            </div>
            )
    }

}


export default connect((state, { pageNum }) => ({
    comments: state.comments.getIn(['pages', pageNum]),
    loading: state.comments.loading,
    loaded: state.comments.loaded,
    pageLimit: state.comments.get('pageLimit'),
    total: state.comments.get('total'),
}), { loadComments })(CommentListPage)