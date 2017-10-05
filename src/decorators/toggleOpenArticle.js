import React, { Component } from 'react'

export default (OriginalComponent) => class DecoratedList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            openArticleId: null
        }
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
    }

    toggleOpenArticle = (id) => {
        if (this.memoizedTogglers.get(id)) return this.memoizedTogglers.get(id)

        const func = (ev) => this.setState({
            openArticleId: id === this.state.openArticleId ? null : id
        })

        this.memoizedTogglers.set(id, func)

        return func
    }

    memoizedTogglers = new Map()
}