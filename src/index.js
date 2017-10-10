import React from 'react'
import {render} from 'react-dom'
import Root from './components/Root'
import store from './store'
import articles from './fixtures'

render(<Root store = {store} articles = {articles}/>, document.getElementById('container'))