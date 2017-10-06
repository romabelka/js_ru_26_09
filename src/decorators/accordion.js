import React from 'react'

export default Component => class Accordion extends React.Component {
    state = {
        openItemId: null
    }

    render() {
        return <Component {...this.props} toggleOpenItem = {this.toggleOpenItemMemoized} openItemId = {this.state.openItemId}/>
    }

    toggleOpenItem = openItemId => ev => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }

    toggleOpenItemMemoized = (openItemId) => {
        if (this.memoizedTogglers.get(openItemId)) return this.memoizedTogglers.get(openItemId)
        const toggler = this.toggleOpenItem(openItemId)
        this.memoizedTogglers.set(openItemId, toggler)
        return toggler
    }

    memoizedTogglers = new Map()
}