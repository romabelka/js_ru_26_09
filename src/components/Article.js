import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentsList'

class Article extends Component {
  
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            date: PropTypes.string.isRequired
        }).isRequired
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen && <section style={{border: '1px solid green'}}>{article.text}</section>
      
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
          
                <CommentsList comments = {article.comments}/>

                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }
}


export default Article