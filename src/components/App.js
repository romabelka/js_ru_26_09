import React from 'react'
import ArticleList from './ArticleList'
import ArticleListInherit from './ArticleListInherit'
import articles from '../fixtures'
import PropTypes from 'prop-types'

function App() {
    return (
        <div>
            <h1>App name</h1>
            <ArticleList articles = {articles} />
            {/*<h2>Articles inheritance</h2>*/}
            {/*<ArticleListInherit articles = {articles} />*/}
        </div>
    )
}

export default App