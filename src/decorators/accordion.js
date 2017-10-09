import React from 'react'

export default (NonDecoratedComponentClass) => class DecoratedComponentClass extends React.Component {
    
    memoizedTogglers = new Map();
    
    constructor(props) {
         super(props);
         this.state = {
             openedItemId: props.defaultOpen
         }
    }
    
    render = () => {
        var props = Object.assign({}, this.props, { toggleOpenArticle: this.toggleOpenArticle })
        console.log(props)
        return <NonDecoratedComponentClass {...props} {...this.state}/>
    }
    
    toggleOpenArticle = (id) => {
        if (this.memoizedTogglers.get(id)) return this.memoizedTogglers.get(id)

        const func = (ev) => this.setState({
            openArticleId: id === this.state.openArticleId ? null : id
        })

        this.memoizedTogglers.set(id, func)

        return func
    }
    
}

