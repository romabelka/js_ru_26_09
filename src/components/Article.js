import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentsList from "./CommentsList";

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            date: PropTypes.string.isRequired,
            comments: PropTypes.array
        }).isRequired
    };

    state = {
        isOpenComments: false
    };

    render() {
        const {article, isOpen, onButtonClick} = this.props;
        const body = isOpen && <section>{article.text}</section>;

        let hasComments = article.comments != null && article.comments.length > 0;
        console.debug("hasComments " + hasComments);
        console.debug("this.state.isOpenComments " + this.state.isOpenComments);

        let commentsButtonBlock = hasComments ?
            <button onClick={this.commentsOnClickHandler} >{this.state.isOpenComments === true ? 'Hide comments...' : 'Show comments...'}</button> :
            <h3>Your comment will be the first =)</h3>;

        let commentsListBlock = this.state.isOpenComments == true ? <CommentsList comments={article.comments}/> : '';

        const commentsBlock = isOpen &&
            <div>
                {commentsButtonBlock}
                {commentsListBlock}
            </div>
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
                {commentsBlock}
            </div>
        )
    }

    commentsOnClickHandler = () => {
        console.debug("commentsOnClickHandler");
        this.setState({
            isOpenComments: !this.state.isOpenComments
        })
    }

}


export default Article