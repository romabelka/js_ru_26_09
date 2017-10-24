import v4 from 'uuid/v4';

export default store => next => action => {
    if (action.type === 'ADD_COMMENT') {
        const id = v4();
        const newComment = { id, text: action.payload.comment.text, user: action.payload.comment.user }
        store.dispatch({ type: 'ADD_COMMENT_FULLFILLED', payload: newComment })
        store.dispatch({ type: 'UPDATE_ARTICLE_COMMENTS', payload: { commentId: id, articleId: action.payload.articleId } })
    }
    next(action)
}