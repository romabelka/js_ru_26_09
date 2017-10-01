import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired
        }).isRequired
    }

    render() {
        const {comment} = this.props
        return (
            <div>
                <h4>
                    {comment.user}
                </h4>
                <div>
                    {comment.text}
                </div>
            </div>
        )
    }
}

export default Comment