import React, { Component } from 'react'

/* 
I. САМЫЙ ПРОСТОЙ СЛУЧАЙ

Мы экспортируем функцию, которая:
1. Принимает на вход компонент для декорирования OriginalComponent
2. Возвращает компонент DecoratedComponent, наследующийся от класса Component из React
3. Компонент DecoratedComponent определяет метод render

В самом простом случае (просто обертка безо всякого дополнительного функционала) это выглядит так:

export default (OriginalComponent) => class DecoratedComponent extends Component {
  render() {
    return <OriginalComponent {...this.state} {...this.props}/>
  }
}

В модуле ArticleList мы:
1. импортируем обертку:
import toggleOpenArticle from '../decorators/toggleOpenArticle'
2. экспортируем не сам компонент ArticleList, а обертку, куда передали ArticleList:
export default toggleOpenArticle(ArticleList)


II. ТЕПЕРЬ ПЕРЕНЕСЕМ toggleOpenArticle ИЗ ArticleList, для чего:
1. Перенесем функцию toggleOpenArticle как есть
2. Передадим ее как toggleOpenArticle = {this.toggleOpenArticle}
3. В ArticleList будем ее вызывать не как this.toggleOpenArticle(article.id), а через свойства this.props.toggleOpenArticle(article.id)


III. ПРОБЛЕМА С РАБОТОЙ С СОСТОЯНИЕМ В DecoratedComponent и ArticleList
1.Все ломается при обращении к state из toggleOpenArticle. 
Перенесем state ровно таким же образом, как и функцию toggleOpenArticle

2. В ArticleList state до сих пор используется при вызове компонента Article:
isOpen = {this.state.openArticleId === article.id}

Так как теперь ArticleList стал stateless-компонентом и все данные к нем приходят в свойствах, в том числе и состояние ({...this.state} ), то перепишем
isOpen = {this.props.openArticleId === article.id}

*/
export default (OriginalComponent) => class DecoratedComponent extends Component {
  
  state = {
    openArticleId: null
  }
  
  render() {
    return <OriginalComponent {...this.props}  {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
  }
  
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
