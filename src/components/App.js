import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import PropTypes from 'prop-types'

function App() {
    return (
        <div>
            <h1>App name</h1>
            <ArticleList articles = {articles} />
        </div>
    )
}

App.propTypes = {
    articles: PropTypes.array
};

export default App