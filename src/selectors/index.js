import {createSelector} from 'reselect'
import dictionary from '../dictionary'

export const filtersSelector = state => state.filters
export const articlesMapSelector = state => state.articles.entities
export const articlesLoading = state => state.articles.loading
export const commentsSelector = state => state.comments.entities
export const idSelector = (_, props) => props.id

export const articlesSelector = createSelector(articlesMapSelector, articles => articles.valueSeq().toArray())

export const filteredArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters
    console.log('---', 'recomputing filtration')

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const createCommentSelector = () => {
    return createSelector(commentsSelector, idSelector, (comments, id) => {
        console.log('---', 'comment selector', id)
        return comments.get(id)
    })
}


export const languageSelector = () => {
    var lng = navigator.browserLanguage || navigator.language || navigator.userLanguage;
    console.log('---', 'language selector', lng)

    if ('ru' === lng)
        return dictionary.ru;

    return dictionary.en
}