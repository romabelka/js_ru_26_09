import React from 'react'
//import ArticleList from './ArticleList'
import ArticleListChild from './ArticleListChild'
import articles from '../fixtures'
import PropTypes from 'prop-types'

function App() {
    return (
        <div>
            <h1>App name</h1>
            <ArticleListChild articles = {articles} />
        </div>
    )
}

App.propTypes = {

}

export default App