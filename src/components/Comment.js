import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    static defaultProps = {
        id: 'test',
        user: 'test',
        text: 'test'
    }
    render() {
        return (
            <li key={this.props.id}>
                <h4>{this.props.user}</h4>
                <p>{this.props.text}</p>
            </li>
        )
    }
}

export default Comment