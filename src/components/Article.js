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

    state = {
        openComments: false
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen &&
            <section>
                <div>
                    {article.text}
                </div>
                <CommentList
                    comments = { article.comments }
                    onCommentsButtonClick = { this.toggleComments() }
                    isCommentsOpen = { this.state.openComments }
                />
            </section>

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
            </div>
        )
    }

    toggleComments = () => (ev) => this.setState({ openComments: !this.state.openComments })
}


export default Article