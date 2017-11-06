import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import languageText from '../languageText'

class LanguageSwitcher extends Component {
    static contextTypes = {
        language: PropTypes.string
    }

    static propTypes = {

    };

    handleChange = selected => {
        this.props.handleLanguageChange(selected.value)
    }

    getOptions() {
        return [
            {
                label: 'English',
                value: 'en'
            },
            {
                label: 'Русский',
                value: 'ru'
            }
        ]
    }

    render() {
        const { language } = this.context
        const selectLabel = language ? languageText[language].CHANGE_LANGUAGE : null
        return (
            <div>
                <p>{ selectLabel }</p>
                <Select
                    options={this.getOptions()}
                    value={language}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default LanguageSwitcher