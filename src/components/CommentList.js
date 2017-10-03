import React, {Component} from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };
    static propTypes = {
        comments: PropTypes.array
    };
    constructor (props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }
    render() {
        if (!this.props.comments.length) return <h3>No comments</h3>;
        const commentElements = this.state.isOpen && this.props.comments.map( comment => {
            return (
                <li key={comment.id}>
                    <Comment comment={comment} />
                </li>
            )
        });
        return (
            <ul>
                <h3>
                    Comments
                    <button onClick={this.handleClick}>{this.state.isOpen ? 'hide' : 'show'}</button>
                </h3>
                {commentElements}
            </ul>
        )
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList;