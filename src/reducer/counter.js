import {INCREMENT} from '../constants'

export default (counter = 10, action) => {
    return action.type === INCREMENT ? counter + 1 : counter
}