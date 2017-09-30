import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component {
    static defaultProps = {
        comments: [],
    }

    state = {
        isOpen: false
    }

    render() {
        if (!this.props.comments.length) return <h3>No comments</h3>

        const {articleOpen} = this.props

        const commentElements = articleOpen && this.state.isOpen && this.props.comments.map(comment => (
            <li key = {comment.id}>
                <Comment
                    comment = {comment}
                />
            </li>
        ))
        return (
            <div>
                <h3>
                    <button onClick={this.onButtonClick}>
                        Comments {this.state.isOpen ? '˄' : '˅'}
                    </button>
                </h3>

                <ul>
                    {commentElements}
                 </ul>
            </div>
        )
    }

    onButtonClick = (ev) => {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    articleOpen: PropTypes.bool
}

export default CommentList