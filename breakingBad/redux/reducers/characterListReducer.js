import { 
    FETCHING_CHARACTER_FAILURE,
    FETCHING_CHARACTER_REQUEST,
    FETCHING_CHARACTER_SUCCESS,
    FETCHING_CHARACTER_DETAILS_SUCCESS
} from '../../constants'

const initialState = {
    isFetching: false,
    errorMessage: '',
    characterDetails: [],
    character: []
}

const characterReducer = (state = initialState,action) => {
    
    switch(action.type) {
        case FETCHING_CHARACTER_REQUEST:
            return {...state,isFetching: true};
        case FETCHING_CHARACTER_FAILURE:
            return { ...state, isFetching: false};
        case FETCHING_CHARACTER_SUCCESS:
            //console.log('action',action.payload)
            return {...state,isFetching: false,character: action.payload};
        case FETCHING_CHARACTER_DETAILS_SUCCESS:
            console.log('action details success',action.payload)
            return {...state,isFetching: false,characterDetails: action.payload};
        default:
            return state;
    }
}


export default characterReducer;