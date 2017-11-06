import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    static propTypes = {

    };

    static contextTypes = {
        words: PropTypes.object
    }

    render() {
        return (
            <div>
                {this.context.words.username}: <input type='text'
                                 value = {this.props.value}
                                 onChange = {this.handleChange}
                            />
            </div>
        )
    }

    handleChange = (ev) => {
        this.props.onChange(ev.target.value)
    }
}

export default UserForm