import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    static propTypes = {

    };

    static contextTypes = {
        dict: PropTypes.object
    }

    render() {
        return (
            <div>
                {this.context.dict["username"]}: <input type='text'
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