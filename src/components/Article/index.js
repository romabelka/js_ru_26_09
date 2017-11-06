import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from '../CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import {connect} from 'react-redux'
import languageText from '../../languageText'
import {deleteArticle, loadArticleById} from '../../AC'
import Loader from '../common/Loader'
import './style.css'

class Article extends Component {
    static contextTypes = {
        language: PropTypes.string
    }
    static propTypes = {
        id: PropTypes.string,
        isOpen: PropTypes.bool,
        onButtonClick: PropTypes.func,
        //connect
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            date: PropTypes.string.isRequired
        }),
    }

    state = {
        clicked: 0
    }

    /*
     shouldComponentUpdate(nextProps) {
     return this.props.isOpen !== nextProps.isOpen
     }
     */

    componentDidMount() {
        const { isOpen, loadArticleById, id } = this.props
        if (isOpen) loadArticleById(id)
    }

    /*componentWillReceiveProps(nextProps) {
        const { isOpen, loadArticleById, id, loading } = nextProps
        if (isOpen && loading === false && this.props.loading === true) loadArticleById(id)
    }*/

    render() {
        const {article, isOpen, onButtonClick} = this.props
        const { language } = this.context
        const closeText = language ? languageText[language].CLOSE : null
        const openText = language ? languageText[language].OPEN : null
        const deleteText = language ? languageText[language].DELETE : null
        if (!article) return null
        if (this.state.clicked > 3) throw new Error('clicked more then 3 times')
        console.log('---', 4)
        return (
            <div>
                <h2 ref = {this.setHeaderRef}>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? closeText : openText}
                    </button>
                    <a href="#" onClick = {this.increment}>clicked {this.state.clicked} times</a>
                    <button onClick = {this.handleDelete}>{deleteText}</button>
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
        if (article.loading) return <Loader/>
        return isOpen && (
                <div>
                    <section>{article.text}</section>
                    <CommentList article = {article} ref = {this.setCommentsRef} key = {this.state.clicked}/>
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


export default connect((state, { id }) => ({
    article: state.articles.getIn(['entities', id]),
    loading: state.articles.loading
}), { deleteArticle, loadArticleById }, null, { pure: false })(Article)