import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentsList extends Component {
  
  static propTypes = {
    comments: PropTypes.array.isRequired
  }
  
  static defaultProps = {
    comments: []
  }
 
  state = {
    isOpenComments: false
  }

  toggleDisplayComments = () => {
    this.setState({isOpenComments: !this.state.isOpenComments})    
  }

  render () {      
    
    if (!this.props.comments.length) return <h3>No comments</h3>
    
    const commentsList = this.state.isOpenComments && this.props.comments.map(comment => (      
      <div key= {comment.id}  style={{border: '1px solid gray'}}>
        <Comment comments={comment}/>
      </div>    
    ))    

    return (
      <div>
        {commentsList}
        <button onClick={this.toggleDisplayComments}>{this.state.isOpenComments ? 'close comments' : 'open comments'}</button>

      </div>
    )  
  }

}

export default CommentsList

