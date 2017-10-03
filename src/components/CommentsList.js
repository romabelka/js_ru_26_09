import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentsList extends Component {
	static defaultProps = {
		comments: [],
	}

	state = {
		isOpened: false
	}

	toggleComments = () => {
		this.setState({ isOpened: !this.state.isOpened })
	}

	render() {
		const commentsElements = this.props.comments.map(comment => (
			<li key={comment.id}>
				<Comment
					user={comment.user}
					text={comment.text}
				/>
			</li>
		))
		return (
			<div>
				<button onClick={this.toggleComments}> {this.state.commentsAreOpened ? 'close comments' : 'open comments'}</button>
				{this.state.isOpened &&
					<ul>
						{commentsElements}
					</ul>}
			</div>
		)
	}

}

CommentsList.propTypes = {
	comments: PropTypes.array.isRequired
}

export default CommentsList