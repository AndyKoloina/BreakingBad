import { 
    FETCHING_CHARACTER_DETAILS_FAILURE,
    FETCHING_CHARACTER_DETAILS_REQUEST,
    FETCHING_CHARACTER_DETAILS_SUCCESS
} from '../../constants'

const initialState = {
    isFetching: false,
    errorMessage: '',
    characterDetails: []
}

const characterDetailsReducer = (state = initialState,action) => {
    console.log('action details',action.payload)
    switch(action.type) {
        case FETCHING_CHARACTER_DETAILS_REQUEST:
            console.log('action details rekest',action.payload)
            return {...state,isFetching: true};
        case FETCHING_CHARACTER_DETAILS_FAILURE:
            console.log('action details failure',action.payload)
            return { ...state, isFetching: false};
        case FETCHING_CHARACTER_DETAILS_SUCCESS:
            console.log('action details success',action.payload)
            return {...state,isFetching: false,characterDetails: action.json};
        default:
            return state;
    }
}

export default characterDetailsReducer;