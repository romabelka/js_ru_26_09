import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from './App'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import history from '../history'

class Root extends Component {
    static propTypes = {

    };

    render() {
        const {store} = this.props
        return (
            <Provider store = {store}>
                <ConnectedRouter history = {history}>
                   <App />
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default Root