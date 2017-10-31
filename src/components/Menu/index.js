import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2>Main Menu</h2>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

export {MenuItem}
export default Menu