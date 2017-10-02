import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.shape({
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    }

    render() {
        const {comment} = this.props
        const body = <section>{comment.text}</section>
        return (
            <div>
                <p>{comment.user}</p>
                {body}
            </div>
        )
    }
}


export default Comment