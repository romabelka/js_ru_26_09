import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from '../CommentList'
import {findDOMNode} from 'react-dom'
import CSSTransition from 'react-addons-css-transition-group'
import {connect} from 'react-redux'
import {deleteArticle} from '../../AC'
import './style.css'

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

        return (
            <div>
                <h2 ref = {this.setHeaderRef}>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    <a href="#" onClick = {this.increment}>clicked {this.state.clicked} times</a>
                    <button onClick = {this.handleDelete}>delete me</button>
                </h2>
                <h3 onClick = {this.updateTime}>Time now: {(new Date).toString()}</h3>
                <CSSTransition
                    transitionName = 'article'
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                    transitionAppearTimeout = {300}
                    transitionAppear
                    component = 'div'
                >
                    {this.getBody()}
                </CSSTransition>
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    getBody() {
        const {isOpen, article} = this.props
        return isOpen && (
                <div>
                    <section>{article.text}</section>
                    <CommentList comments = {article.comments} ref = {this.setCommentsRef} key = {this.state.clicked}/>
                </div>
            )
    }

    handleDelete = () => {
        //this.props.dispatch(deleteArticle(this.props.article.id))
//        this.props.deleteArticle(this.props.article.id)
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
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


export default connect(null, { deleteArticle })(Article)