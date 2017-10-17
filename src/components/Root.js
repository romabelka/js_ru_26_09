import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from './App'
import {Provider} from 'react-redux'

class Root extends Component {
    static propTypes = {

    };

    render() {
        const {store} = this.props
        return (
            <Provider store = {store}>
                <App />
            </Provider>
        )
    }
}

export default Root