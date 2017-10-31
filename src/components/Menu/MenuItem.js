import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

class MenuItem extends Component {
    static propTypes = {

    };

    render() {
        const {children, to} = this.props
        return (
            <li>
                <NavLink to = {to} activeStyle = {{color: 'red'}}>{children}</NavLink>
            </li>
        )
    }
}

export default MenuItem