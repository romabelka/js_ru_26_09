import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'


class ArticleList extends Accordion {
    constructor(props) {
        super(props)
        this.state = {
            openItemId: props.articles[0].id,
            error: null
        }
    }

    componentWillReceiveProps(props) {
        console.log('--props', props);
    }

    render() {
        const {articles, state} = this.props
        console.log('--state', state);

        if (this.state.error) return <h2>{this.state.error}</h2>

        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {article.id === this.state.openItemId}
                     onButtonClick = {this.toggleOpenItemMemoized(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    componentDidCatch(error) {
        console.log('---', error)
        this.setState({
            error: error.message
        })
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    articles: state.articles,
    state: state,
})

export default connect(mapStateToProps)(ArticleList)