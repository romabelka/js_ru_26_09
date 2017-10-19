import React from 'react'
import {render} from 'react-dom'
import Root from './components/Root'
import store from './store'

store.subscribe(() => {
    console.log('store', store.getState());
})

render(<Root store = {store} />, document.getElementById('container'))