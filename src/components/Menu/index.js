import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
        dictionary: PropTypes.object
    }

    render() {
        const dict = this.context.dictionary
        return (
            <div>
                <h2>{dict.main_menu}</h2>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

export {MenuItem}
export default Menu