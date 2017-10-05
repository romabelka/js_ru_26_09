import React from 'react'
import ArticleListParent from './ArticleListParent'
import Article from './Article'

class ArticleListChild extends ArticleListParent {
    render() {
        if (!this.props.articles.length) return <h3>No articles</h3>

        const articleElements = this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={this.state.openArticleId === article.id}
                    onButtonClick={this.toggleOpenArticle(article.id)}
                />
            </li>
        ))
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default ArticleListChild