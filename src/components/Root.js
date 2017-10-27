import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from './App'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

class Root extends Component {
    static propTypes = {

    };

    render() {
        const {store} = this.props
        return (
            <Provider store = {store}>
                <BrowserRouter>
                   <App />
                </BrowserRouter>
            </Provider>
        )
    }
}

export default Root