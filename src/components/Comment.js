import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  
  static propTypes = {
    comments: PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string,
        text: PropTypes.string
    }).isRequired
  }
  
 render() {
   const {user, text} = this.props.comments
   return (
     <ul>
      <li>user: {user}</li>
      <li>text: {text}</li>
     </ul>
   )  
 }

}

export default Comment

