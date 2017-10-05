import React, { Component } from 'react'

export default class ArticlesAccordion extends Component {
    /**
     * Переключение статей по принципу аккордеона
     * @param id - идентификатор статьи
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