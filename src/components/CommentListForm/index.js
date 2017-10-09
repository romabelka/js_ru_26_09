import React, { Component } from 'react'
import './style.css'

class CommentListForm extends Component {
    state = {
        user: '',
        text: '',
        validUser: false,
        validText: false
    }

    render() { 
        return (
            <form onSubmit={this.state.validUser && this.state.validText ?
                this.handleSubmit :
                this.validAlert
            }>
                User: <input type='text'
                    value={this.state.user}
                    onChange={this.handleChangeUser}
                    className={this.state.validUser ? 'valid' : 'notValid'} 
                />
                Text: <input type='text'
                    value={this.state.text}
                    onChange={this.handleChangeText}
                    maxLength="50"
                    className={this.state.validText ? 'valid' : 'notValid'}
                />
                <input type="submit" value="Отправить" />
            </form>
        )
    }

    handleChangeUser = (ev) => {
        this.setState({
            user: ev.target.value
        })
        if (this.state.user.length < 4) {
            this.setState({
                validUser: false
            })
        } else {
            this.setState({
                validUser: true
            })
        }
    }

    handleChangeText = (ev) => {
        this.setState({
            text: ev.target.value
        })
        if (this.state.text.length < 10) {
            this.setState({
                validText: false
            })
        } else {
            this.setState({
                validText: true
            })
        }  
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.setState({
            user: '',
            text: '',
            validUser: false,
            validText: false
        })
    }

    validAlert = (ev) => {
        ev.preventDefault()
        alert('Not valid')
    }
}

export default CommentListForm