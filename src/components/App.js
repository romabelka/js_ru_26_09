import React from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import articles from '../fixtures'

function App() {
    return (
        <div>
            <h1>App name</h1>
            <ArticleList articles = {articles} />
            <ArticlesChart articles = {articles} />
        </div>
    )
}

App.propTypes = {

}

export default App