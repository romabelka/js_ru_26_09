import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './CommentForm.css'

class CommentForm extends Component {
    state = {
        user: '',
        comment: ''
    }

    render() {
        const {user, comment, canSubmit} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type='text' name='user' maxLength='50' placeholder='Name' value={user} className={this.inputClassName('user')} onChange={this.handleChange} />
                </div>
                <div>
                    <textarea name='comment' maxLength='50' placeholder='Write your comment here' value={comment} className={this.inputClassName('comment')} onChange={this.handleChange} />
                </div>
                <div>
                    <input type='submit' value='Submit' disabled={!this.canSubmit()} />
                </div>
            </form>
        )
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        })
    }

    isInvalid = (e) => this.state[e].length < 10

    inputClassName = (e) => this.isInvalid(e) ? 'invalid' : ''

    canSubmit = (e) => !this.isInvalid('user') && !this.isInvalid('comment')

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({
            user: '',
            comment: ''
        })
    }
}

export default CommentForm