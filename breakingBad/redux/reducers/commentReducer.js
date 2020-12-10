import {
    ADD_COMMENTS
} from '../../constants'
import { v4 as uuidv4 } from 'uuid';
const initialState = {
    comments: []
}
const commentReducer = (state = initialState ,action) => { 
    switch(action.type) {
        case ADD_COMMENTS:
            if(action.value === '') {
                return state
            }
            return Object.assign({}, state, {
                comments: [{
                  title: action.value,
                  id: uuidv4()
                }, ...state.comments]
              })
        default:
            return state;
    }
}
export default commentReducer