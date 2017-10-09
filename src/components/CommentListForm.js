import React, { Component } from 'react'

class CommentListForm extends Component {
    state = {
        user: '',
        validValue: false
    }

    render() {
        return (
            <div>
                User: <input type='text' value={this.state.user} onChange={this.handleChange}/>
                Text: <input type='text' />
            </div>
        )
    }

    handleChange = (ev) => {
        this.setState({
            user: ev.target.value
        })
    }
}

export default CommentListForm