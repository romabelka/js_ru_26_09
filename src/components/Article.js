import React, { Component } from 'react'
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

    state = {
        commentsAreOpened: false
    }
    openComments = () => {
        this.setState({ commentsAreOpened: !this.state.commentsAreOpened })
    }

    render() {
        const { article, isOpen, onButtonClick } = this.props
        const body = isOpen && <section>{article.text}</section>
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
                {isOpen &&
                    <div>
                        <button onClick={this.openComments}> {this.state.commentsAreOpened ? 'close comments' : 'open comments'}</button>
                        {this.state.commentsAreOpened && <CommentsList comments={article.comments} />}
                    </div>}
            </div>
        )
    }
}


export default Article