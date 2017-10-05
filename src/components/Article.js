import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            date: PropTypes.string.isRequired
        }).isRequired,
        isOpen: PropTypes.bool,
        onButtonClick: PropTypes.func
    }

    state = {
        clicked: 0
    }
    
    increment = ev => {
        ev.preventDefault()
        this.setState({
            clicked: this.state.clicked + 1
        })
    }

    updateTime = () => this.setState({})

    render() {
        const { article, isOpen, onButtonClick } = this.props
        const body = isOpen && (
            <div>
                <section>{article.text}</section>
                <CommentList comments={article.comments} id={article.id} />
            </div>
        )
        return (
            <div>
                {article.title}
                <button onClick={onButtonClick}>
                    {isOpen ? 'close' : 'open'}
                </button>
                <a href="#" onClick={this.increment}>clicked {this.state.clicked} times</a>
                <h3 onClick={this.updateTime}>Time now: {(new Date).toString()}</h3>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

}


export default Article