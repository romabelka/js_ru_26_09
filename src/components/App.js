import React from 'react'
import articles from '../fixtures'
/* Для подключения варианта с наследованием раскоментировать строку ниже
и убрать импорт варианта с декоратором */
/* import ArticleList from './ArticleListV2' */
import ArticleList from './ArticleListV2'

function App() {
    return (
        <div>
            <h1>App name</h1>
            <ArticleList articles = {articles} />
        </div>
    )
}

export default App