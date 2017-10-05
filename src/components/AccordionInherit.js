import React, { Component } from 'react';

class AccordionInherit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openElementId: null
        }
    }
    toggleOpenElement = (openElementId, isOpen) => (ev) => this.setState({
        openElementId : isOpen ? null : openElementId
    });
}
export default AccordionInherit