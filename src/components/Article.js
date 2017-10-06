import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import {findDOMNode} from 'react-dom'

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

/*
    shouldComponentUpdate(nextProps) {
        return this.props.isOpen !== nextProps.isOpen
    }
*/

    render() {
        const {article, isOpen, onButtonClick} = this.props
        if (this.state.clicked > 3) throw new Error('clicked more then 3 times')

        const body = isOpen && (
                <div>
                    <section>{article.text}</section>
                    <CommentList comments = {article.comments} ref = {this.setCommentsRef} key = {this.state.clicked}/>
                </div>
            )
        return (
            <div>
                <h2 ref = {this.setHeaderRef}>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    <a href="#" onClick = {this.increment}>clicked {this.state.clicked} times</a>
                </h2>
                <h3 onClick = {this.updateTime}>Time now: {(new Date).toString()}</h3>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    setHeaderRef = header => {
        this.header = header
//        console.log('---', header)
    }

    setCommentsRef = comments => {
//        setTimeout(() => comments.forceUpdate(), 1000)
//        console.log('---', findDOMNode(comments))
    }

    increment = ev => {
        ev.preventDefault()
        this.setState({
            clicked: this.state.clicked + 1
        })
    }

    updateTime = () => this.setState({})
}


export default Article