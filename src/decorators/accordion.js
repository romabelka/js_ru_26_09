/* Компонент аккордеон - декоратор */

import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openItemId: null
        }
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenItem = {this.toggleOpenItem}/>
    }

    toggleOpenItem = (id) => {
        if (this.memoizedTogglers.get(id)) return this.memoizedTogglers.get(id);

        const func = (ev) => this.setState({
            openItemId: id === this.state.openItemId ? null : id
        });

        this.memoizedTogglers.set(id, func);

        return func;
    };

    memoizedTogglers = new Map();
}