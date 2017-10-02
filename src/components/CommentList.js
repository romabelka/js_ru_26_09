import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'


class CommentList extends Component {

	static propTypes = {
	    comments: PropTypes.array.isRequired
	}

	static defaultProps = {
	    comments: [],
	}

	state = {
	    isOpen: null
	}


	render() {

		const commentsLength = this.props.comments.length;

	    if (!commentsLength) return <h3>No coments</h3>

	    const commentElements = this.props.comments.map(comment => (
	        <li key = {comment.id}>
	            <Comment
	                comment = {comment}
	            />
	        </li>
	    ))
	    return (
	        <div>
	        	<i>Comments {commentsLength ? `(${commentsLength})` : ``}</i><button onClick={this.toggleOpenComment()} > {this.state.isOpen ?  "close" : "open"}  </button>
		        <ul>
		            {this.state.isOpen && commentElements}
		        </ul>
	        </div>
	    )
	}

	toggleOpenComment = () => () => this.setState({ isOpen: !this.state.isOpen });
}


export default CommentList