import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment} from '../../AC'
import './style.css'

class CommentForm extends Component {
    static propTypes = {
    };

    static contextTypes = {
        dictionary: PropTypes.object
    }

    state = {
        user: '',
        text: ''
    }

    render() {
        const dict = this.context.dictionary
        return (
            <form onSubmit = {this.handleSubmit}>
                {dict.user}: <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                {dict.comment}: <input value = {this.state.text}
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')} />
                <input type = "submit" value = {dict.submit}/>
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.props.addComment(this.state)
        this.setState({
            user: '',
            text: ''
        })
    }

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
        ? 'form-input__error' : ''

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }
}

const limits = {
    user: {
        min: 10,
        max: 50
    },
    text: {
        min: 10,
        max: 50
    }
}

export default connect(null, (dispatch, ownProps) => ({
    addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
}))(CommentForm)