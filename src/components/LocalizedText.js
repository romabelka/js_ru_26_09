import React  from 'react'
import PropTypes from 'prop-types'

function LocalizedText(props, context) {
    if (typeof props.children !== 'string') {
        console.warn('string child expected')
        return props.children
    }
    return context.dictionary[props.children] || props.children
}

LocalizedText.propTypes = {
    children: PropTypes.string
}

LocalizedText.contextTypes = {
    dictionary: PropTypes.object.isRequired
}

export default LocalizedText