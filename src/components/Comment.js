import React from 'react'
import PropTypes from 'prop-types'

const Comment = (props) => {
    const { user, text } = props
    return (
        <div>
            <h2>{user}</h2>
            <div>{text}</div>
        </div>
    )
}

Comment.propTypes = {
    user: PropTypes.string,
    text: PropTypes.string 
}
export default Comment