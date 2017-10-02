import React, {Component} from 'react'
import PropsTypes from 'prop-types'


class Comment extends Component {

    render() {
        const {comment} = this.props;

        return (
            <div>
                <h3>{comment.user}</h3>
                <section>{comment.text}</section>
            </div>
        )
    }

}

Comment.propTypes = {
    comment: PropsTypes.shape({
        id: PropsTypes.string.isRequired,
        user: PropsTypes.string.isRequired,
        text: PropsTypes.string
    })
}

export default Comment