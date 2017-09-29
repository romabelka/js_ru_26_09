import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {

    static propTypes = {
        comment: PropTypes.shape({
            id: PropTypes.string.isRequired,
            user: PropTypes.string,
            text: PropTypes.string
        }).isRequired
    };

    render() {

        const {comment} = this.props;

        return (
            <div>
                <p>
                    <b>
                        {comment.user}
                    </b>
                </p>
                <p>
                    {comment.text}
                </p>
            </div>
        )
    }
}


export default Comment