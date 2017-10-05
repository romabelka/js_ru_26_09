import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

function CommentList(props) {
    const {comments, isOpen, toggleOpen} = props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({ isOpen, comments })}
        </div>
    )
}

function getBody({comments, isOpen}) {
    if (!isOpen) return null

    const body = comments.length ? (
        <ul>
            {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
        </ul>
    ) : <h3>No comments yet</h3>

    return (
        <div>
            {body}
        </div>
    )
}


CommentList.defaultProps = {
    comments: []
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
}

export default toggleOpen(CommentList)

/* 
==Train of Thought via Decorators==
  
Изначально компонент CommentList вызывался в Article как есть и выполнял следующие функции:
0. всякие defaultProps (по умолчанию пустой массив комментариев для случая если комментарии не пришли) и propTypes (комментарии должны быть массивом)
1. хранил состояние (открыто/закрыто)
2. рендерил комментарии с помощью вспомогательной функции getBody (использовала this.state и this.props) и компонента Comment
3. обрабатывал клик по кнопке с помощью функции toggleOpen, которая управляла состоянием isOpen (соответственно открывая и скрывая комментарии под каждой статьей)

Мы решили вынести из CommentList функционал, который может быть переиспользован, а именно:
1. функцию toggleOpen, которая изменяет состояние
2. а заодно и само состояние со свойствами


export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }

    toggleOpen = () => this.setState({
        isOpen: !this.state.isOpen
    })

}

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }
    static propTypes = {
        comments: PropTypes.array.isRequired
    }
    state = {
        isOpen: false
    }

    render() {
        const {comments} = this.props
        const text = this.state.isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={this.toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        const {comments} = this.props
        const body = comments.length ? (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
            </div>
        )
    }

    toggleOpen = () => this.setState({
        isOpen: !this.state.isOpen
    })
}

export default CommentList
*/