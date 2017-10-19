import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'

class ArticleList extends Accordion {
    constructor(props) {
        super(props)
        this.state = {
            openItemId: (props.articles && props.articles.length>1) ? props.articles[0].id : null,
            error: null
        }
    }

    render() {
        const {articles} = this.props
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


export default connect((state) => ({
    articles: state.articles.filter(article => {
        if (state.selectFilter.length==0) return true;
        for (let i = 0; i<state.selectFilter.length; i++)
        {
           if (article.id === state.selectFilter[i].value) return true;
        }
        return false;
    }).filter(article => {
        if (!state.dateFilter || !state.dateFilter.from || !state.dateFilter.to) return true;
        if (
            new Date(article.date)>=state.dateFilter.from.setHours(0,0,0,0)
            && new Date(article.date)<=state.dateFilter.to.setHours(23,59,59,999))
            return true;
        else return false;
    })
}))(ArticleList)