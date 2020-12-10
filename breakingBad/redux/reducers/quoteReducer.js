import {
    RANDOM_QUOTE
} from '../../constants'

const initialState = {
    randomQuote: {}
}

const quoteReducer = (state = initialState,action) => {  
    switch(action.type) {
        case RANDOM_QUOTE:
            return {...state,isFetching: false,randomQuote: action.payload};
        default:
            return state;
    }
}


export default quoteReducer;