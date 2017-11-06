import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import languageText from '../../languageText'

class Menu extends Component {
    static contextTypes = {
        language: PropTypes.string
    }

    static propTypes = {

    };

    render() {
        const { language } = this.context
        const menuTitle = language ? languageText[language].MENU_TITLE : null
        return (
            <div>
                <h2>{menuTitle}</h2>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

export {MenuItem}
export default Menu