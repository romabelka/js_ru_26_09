import React, { Component } from 'react'
import PropTypes from 'prop-types'


class NewCommentForm extends Component {
  
    
    static propTypes = {

    };

    state = {
        username: '',
        text: ''
    }

    fieldsLength = {
        MAX: 50,
        MIN: 10   
    }
    
    
    render() {
        
        return (
            <form name = 'send-comment' onSubmit = {this.onSendCommentSubmit}>
                username: <input type='text'
                                value = {this.state.username}
                                onChange = {this.onUsernameChange}
                                style = {(this.state.username.length < 10) ? {color: 'red'} : {color: 'black'}}
                            /> {' '}
                text:  <input type='text'
                                value = {this.state.text}
                                onChange = {this.onTextChange}
                                style = {(this.state.text.length < 10) ? {color: 'red'} : {color: 'black'}}
                            /> {' '}
                <input type='submit' />
            </form>
        )
    }

    onUsernameChange = (ev) => {
        if (ev.target.value.length < this.fieldsLength.MAX) return this.setState({
            username: ev.target.value,
        }) 
        
    }
    
    onTextChange = (ev) => {
        if (ev.target.value.length < this.fieldsLength.MAX) return this.setState({
            text: ev.target.value
        })
    }
    
    onSendCommentSubmit = (ev) => {
        ev.preventDefault()
        if (this.state.username.length > this.fieldsLength.MIN && this.state.text.length > this.fieldsLength.MIN) return this.setState({
            username: '',
            text: ''
        })        
    }
}

export default NewCommentForm