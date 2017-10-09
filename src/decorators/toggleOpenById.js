// decorator === HOC
import React from 'react'

export default (OriginalComponent) => class ToggleOpenByeId extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openedId: null
        }
    }
    toggleOpen = (id) => {
        if (this.memoizedTogglers.get(id)) return this.memoizedTogglers.get(id)

        const func = (ev) => this.setState({
            openedId: id === this.state.openedId ? null : id
        })

        this.memoizedTogglers.set(id, func)

        return func
    }
    memoizedTogglers = new Map()

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen}  />
    }
}