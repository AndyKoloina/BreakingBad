import {
    FETCHING_CHARACTER_DETAILS_FAILURE,
    FETCHING_CHARACTER_DETAILS_REQUEST,
    FETCHING_CHARACTER_DETAILS_SUCCESS,
    URL_GLOBAL,
    API_CHARACTER
} from '../../constants'

export const fetchingCharacterDetailsRequest = () => ({
    type: FETCHING_CHARACTER_DETAILS_REQUEST
})

export const fetchingCharacterDetailsSuccess = (json) => ({
    type: FETCHING_CHARACTER_DETAILS_SUCCESS,
    json
})

export const fetchingCharacterDetailsFailure = (error) => ({
    type: FETCHING_CHARACTER_DETAILS_FAILURE,
    payload: error
})


export const fetchCharacterById = id => {
    return async dispatch => {
        dispatch(fetchingCharacterDetailsRequest());
        try {
            const url = `${URL_GLOBAL}${API_CHARACTER}/${id}`;
            console.log('url',url)
            const response = await fetch(url,{
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const responseBody = await response.json()
            console.log('responseBody details',responseBody)
            dispatch(fetchingCharacterDetailsSuccess(responseBody))
        } catch(error) {
            dispatch(fetchingCharacterDetailsFailure(error))
        }
    }
}