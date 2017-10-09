import React, { Component } from 'react'

class Toggler extends Component {
    state = {
        openItemId: null
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

export default Toggler