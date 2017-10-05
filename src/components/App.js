/*
 * Наследование
 *
 * Компонент ArticleList, наследующийся от класса toggleOpenArticleClass расположен в модуле ArticleListInheritance
 * Класс toggleOpenArticleClass - в модуле decorators/toggleOpenArticle
 */

import React from 'react'
import ArticleList from './ArticleList'
// import ArticleList from './ArticleListInheritance'
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

}

export default App