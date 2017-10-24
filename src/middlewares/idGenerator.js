import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    const {type, payload} = action

    switch(type) {
        case ADD_COMMENT:
            payload.comment.id = generateId();
            break;
    }

    next(action)
}

const generateId = () => {
    var result       = '';
    var words        = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    var max_position = words.length - 1;
    for( let i = 0; i < 16; ++i ) {
        let position = Math.floor ( Math.random() * max_position );
        result = result + words.substring(position, position + 1);
    }
    return result;
}