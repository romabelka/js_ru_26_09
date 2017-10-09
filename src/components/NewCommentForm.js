import React, { Component } from 'react'


class NewCommentForm extends Component {

    state = {
        commentText: '',
        isValid: false,
        color: 'grey'
    }

    render() {
        return (
            <div>
                <h4>Оставь комментарий..</h4>
                 <textarea type='text' value = {this.state.commentText} style={{width: 650 + 'px', borderColor: this.state.color}}
                 onChange = {this.handleChange}
                />
                <br/>
                <button disabled={!this.state.isValid} onClick={this.handleClick}>Добавить</button>
            </div>
        )
    }

    handleChange = (ev) => {

        if (ev.target.value.length > 50) return this.setState({isValid: false})

        if (ev.target.value.length < 10) {
            this.setState({
                isValid: false,
                color: 'red',
                commentText: ev.target.value
            })
        } else {
            this.setState({
                isValid: true,
                color: 'gray',
                commentText: ev.target.value
            })
        }


    }

    handleClick = (ev) => {
        this.setState({
            commentText: ''
        })
    }
}


export default NewCommentForm
