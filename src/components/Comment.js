import React, {Component} from 'react'

class Comment extends Component {
    render(){
        return (
            <div>
                <h4>
                    {this.props.comment.user}
                </h4>
                {this.props.comment.text}
            </div>
        )
    }
}

export default Comment