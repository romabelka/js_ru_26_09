/* Компонент аккордеон - класс для наследования */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AccordionComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openItemId: null
        }
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

export default AccordionComponent