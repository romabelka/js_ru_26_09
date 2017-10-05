import React from 'react';

export default (OriginalComponent) => class Accordion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openElementId: null
        }
    }
    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenElement = {this.toggleOpenElement}/>
    }

    toggleOpenElement = (openElementId, isOpen) => (ev) => this.setState({
        openElementId : isOpen ? null : openElementId
    });
}