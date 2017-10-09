import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentForm extends Component {
    state = {
        username: '',
        text: '',
        usernameInvalid: true,
        textInvalid: true
    }

    render() {
        let formDisabled = (this.state.usernameInvalid || this.state.textInvalid) ? 'disabled' : '';

        return (
                <div>
                    <form onSubmit={this.submit}>
                        Username: <input type='text'
                                         value = {this.state.username}
                                         onChange = {this.usernameChange}
                                         style={this.state.usernameInvalid ? {'backgroundColor': '#ffcbc1'} : {'backgroundColor': '#FFFFFF'}}
                        /><br/>
                        Text: <textarea cols='50'
                                        rows='3'
                                        value = {this.state.text}
                                        onChange = {this.textChange}
                                        style={this.state.textInvalid ? {'backgroundColor': '#ffcbc1'} : {'backgroundColor': '#FFFFFF'}}
                        /><br/>
                        <input disabled={formDisabled}
                               type='submit'
                               rows='3'
                               value = 'Add comment'
                        />
                    </form>
                </div>
            )
    }

    usernameChange = (ev) => {
        if (ev.target.value.length > 10) return;

        let usernameInvalid = ev.target.value.length<3 ? true : false;

        this.setState({
            usernameInvalid: usernameInvalid,
            username: ev.target.value
        })
    }

    textChange = (ev) => {
        if (ev.target.value.length > 50) return;

        let textInvalid = ev.target.value.length<10 ? true : false;

        this.setState({
            textInvalid: textInvalid,
            text: ev.target.value
        })
    }

    submit = (ev) => {
        ev.preventDefault();
        if (!this.state.usernameInvalid && !this.state.textInvalid) {
            // отправляем данные из формы куда надо ... ///

            this.setState({
                username: '',
                text: '',
                usernameInvalid: true,
                textInvalid: true
            })

        }
    }
}

export default CommentForm