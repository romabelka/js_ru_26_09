import React, { Component } from 'react';
import './NewCommentForm.css'


class NewCommentForm extends Component {
	state = {
		user: '',
		comment: ''
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.user.length < 10) {
			return
		} else {
			this.setState({ user: '', comment: '' })
		}
	}
	userHandleChange = e => this.setState({ user: e.target.value })
	commentHandleChange = e => {
		if (this.state.comment.length < 50) {
			this.setState({ comment: e.target.value });
		}
	}
	render() {
		return (
			<form>
				<label htmlFor={'userName'}>User Name:</label>
				<br />
				<input
					type='text'
					value={this.state.user}
					className={this.state.user && this.state.user.length < 10 ? 'validationFail' : ''}
					onChange={this.userHandleChange}
					id={'userName'}
				/>
				<br />
				<label htmlFor={'comment'}>Comment:</label>
				<br />
				<textarea
					value={this.state.comment}
					className={''}
					onChange={this.commentHandleChange}
					id={'comment'}
				/>
				<br />
				<button type='submit'onClick ={this.handleSubmit}>Submit</button>
			</form>
		)
	}
}

NewCommentForm.propTypes = {

}

export default NewCommentForm