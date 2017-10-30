import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { allCommentsSelector } from '../selectors'
import Loader from './common/Loader'
import {
    loadComments,
    getNumberOfComments
} from "../AC/index"

const mapStateToProps = (state) => ({
    allComments: allCommentsSelector(state),
    loading: state.comments.get('loading'),
    totalNumber: state.comments.get('totalNumber')
})

class AllCommentList extends Component {

    constructor(props) {
        super(props)
        this.limit = 5
    }

    componentWillMount() {
        this.props.loadComments(5, 0)
    }

    getPagination() {
        const totalNumberComments = this.props.totalNumber
        let i,
            numberOfPage = Math.ceil(totalNumberComments / this.limit),
            buffer = []
        debugger
        for (i = 0; i < numberOfPage; i++ ) {
            buffer.push(<button>{i+1}</button>)
        }

        return (
            <div className = "pagination">
                { buffer }
            </div>
        )
    }

    render() {
        const { allComments, loading} = this.props
        if (loading) return <Loader />

        if (!allComments.length) return <h2>Комментарии отсутствуют</h2>
        return (
            <div>
                {this.getPagination()}
            </div>
        )
    }
}

export default connect(mapStateToProps, {
    loadComments,
    getNumberOfComments
})(AllCommentList)