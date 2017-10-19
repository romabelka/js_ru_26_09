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

    render() {
        const { articles, selected, dateRange } = this.props
        if (this.state.error) return <h2>{this.state.error}</h2>
        let articlesSelected, articlesFiltered
        if (selected.length) {
            articlesSelected = []
            selected.forEach(
                select => articles.forEach(
                    article => {
                        if (article.title == select.label) articlesSelected.push(article)
                    }
                )
            )  
        } else {
            articlesSelected = articles  
        }
        if (dateRange.to) {
            articlesFiltered = articlesSelected.filter(article => {
                console.log(Date.parse(dateRange.from),
                    Date.parse(article.date),
                    Date.parse(dateRange.to))
                return Date.parse(dateRange.from) <= Date.parse(article.date)
                    && Date.parse(article.date) <= Date.parse(dateRange.to)
            })
        } else {
            articlesFiltered = articlesSelected
        }
        if (!articlesFiltered.length) return <h3>No Articles</h3>
        const articleElements = articlesFiltered.map((article) => <li key={article.id}>
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
    articles: state.articles,
    selected: state.selected,
    dateRange: state.dateRange
}))(ArticleList)