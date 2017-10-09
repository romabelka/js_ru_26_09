import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';
import './NewCommentForm.css'


class NewCommentForm extends Component {
	state = {
		user: '',
		comment: null,
		text: '',
		editorState: EditorState.createEmpty()
	}

	onChange = (editorState) => this.setState({ editorState });
	userHandleChange = e => this.setState({ user: e.target.value })
	commentHandleChange = e => {
		this.setState({ text: e.target.value })
		let text = <span style={{ color: 'blue' }}> AND </span>
		const newValue = <div> {this.state.text.replace(/and/g, text)} </div>;
		this.setState({ comment: newValue })
	}


	textHandleChange = (e) => {
		console.log(e.target.value);
		let text = <span style={{ color: 'blue' }}> AND </span>
		const newValue = <div> {this.state.text.replace(/and/g, text)} </div>;
		this.setState({ comment: newValue })
	}


	render() {
		return (
			<form onSubmit={this.handleSubmit}>
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
					value={this.state.text}
					className={''}
					onChange={this.commentHandleChange}
					id={'comment'}
				></textarea>
				<div>{this.state.comment}</div>
				<Editor editorState={this.state.editorState} onChange={this.onChange} />

			</form>
		)
	}
}

NewCommentForm.propTypes = {

}

export default NewCommentForm