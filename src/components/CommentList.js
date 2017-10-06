import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class CommentList extends Component {
    static defaultProps = {
        comments: [],
    }
    

    
    state ={
        open: false
    }
    
    toggleComments = () => {
        this.setState({open: !(this.state.open)})
    }
    
    render = () => {
        const commentElements = this.props.comments.map(comment => (
          <li key = {comment.id}>
              <Comment
                  comment = {comment}
              />
          </li>
        ))

        return (
           <div>
               <button onClick={this.toggleComments}>{this.state.open ? 'hide comments' : 'show comments'}
               </button>
               <ul>
                   {this.state.open ? commentElements: null}
               </ul>
           </div>
        )
    }
}

CommentList.propTypes = {
    comments: PropTypes.array,
}

export default CommentList