import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ArticlesChart extends Component {
    static propTypes = {

    };

    componentDidMount() {
        //do some charting with d3 inside this.refs.container
    }

    componentWillReceiveProps(nextProps) {
        //update charts with nextProps
    }

    componentWillUnmount() {
        //do some cleanup
    }

    render() {
        return <div ref = 'container' />
    }
}

export default ArticlesChart