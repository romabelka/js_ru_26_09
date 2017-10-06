import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

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
        const body = isOpen && <section>{article.text}</section>
        
        const comments = isOpen && <div><h3>Comments</h3> <CommentList comments = {article.comments} /> </div>
        
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
                {comments}
                
            </div>
        )
    }
}


export default Article