import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired
    };
    render() {
        const {comment} = this.props;
        return (
            <div>
                <h2>{comment.user}</h2>
                <p>{comment.text}</p>
            </div>
        )
    }
}

export default Comment;