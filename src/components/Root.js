import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from './App'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'

class Root extends Component {
    static propTypes = {

    };

    render() {
        const {store} = this.props
        return (
            <Provider store = {store}>
                <HashRouter>
                   <App />
                </HashRouter>
            </Provider>
        )
    }
}

export default Root