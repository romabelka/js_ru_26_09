import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
        words: PropTypes.object
    }

    render() {
        return (
            <div>
                <h2>{this.context.words.mainMenu}</h2>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

export {MenuItem}
export default Menu