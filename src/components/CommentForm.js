import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CommentForm extends Component {
    state = {
        user: '',
        comment: '',
        canSubmit: false
    }

    render() {
        const {user, comment, canSubmit} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type='text' name='user' maxLength='50' placeholder='Name' value={user} className={this.inputClassName('user')} onChange={this.handleChange} />
                </div>
                <div>
                    <textarea name='comment' maxLength='50' placeholder='Write your comment here' value={comment} onChange={this.handleChange} />
                </div>
                <div>
                    <input type='submit' value='Submit' disabled={this.canSubmit} />
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

    inputClassName = (e) => this.isInvalid(e) ? 'invalid' : ''

    isInvalid = (e) => this.state[e].length < 10

    handleSubmit = (e) => {
        e.preventDefault();


        console.log(this.state);
    }
}

export default CommentForm