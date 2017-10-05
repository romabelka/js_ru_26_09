import React from 'react'

export default (Original) => class Decorator extends React.Component {
    state = {
        openArticleId: null
    }

    render() {
        return <Original {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
    }

    /**
     * Переключение статей по принципу аккордеона
     * @param id идентификатор статьи
     */
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