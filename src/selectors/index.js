import {createSelector} from 'reselect'

export const filtersSelector = state => state.filters
export const articlesSelector = state => state.articles
export const commentsSelector = state => state.comments
export const idSelector = (state, props) => props.id

export const filteredArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters
    let selectedArticles = [];
    for (let id in articles) {
        const article = articles[id]
        const published = Date.parse(article.date)
        if ((!selected.length || selected.includes(article.id)) &&
        (!from || !to || (published > from && published < to))) {
            selectedArticles.push(id);
        }
    }
    return selectedArticles;
})

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments[id]
})

export const createArticleSelector = () => createSelector(articlesSelector, idSelector, (articles, id) => {
    return articles[id]
})