import {createSelector} from 'reselect'

export const filtersSelector = state => state.filters
export const articlesSelector = state => state.articles
export const commentsSelector = state => state.comments
export const idSelector = (state, props) => props.id

export const filteredArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    console.log('---', 'article list selector')
    const {selected, dateRange: {from, to}} = filters

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => {
    console.log('---', 'comment selector', id)

    return comments[id]
})