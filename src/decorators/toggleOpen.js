// decorator === HOC
import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    componentDidMount() {
        console.log('---', 'decorated component mounted')
    }

    componentWillUpdate() {
        console.log('---', 'decorated component updating')
    }

    componentWillUnmount() {
        console.log('---', 'decorated component unmounted')
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }

    toggleOpen = () => this.setState({
        isOpen: !this.state.isOpen
    })

}