import {
    FETCHING_CHARACTER_FAILURE,
    FETCHING_CHARACTER_REQUEST,
    FETCHING_CHARACTER_SUCCESS,
    FETCHING_CHARACTER_DETAILS_SUCCESS,
    CLEAR_DETAILS_CHARACTER,
    URL_GLOBAL,
    API_CHARACTER
} from '../../constants'
import Character from '../../models/Character'
export const fetchingCharacterListRequest = () => ({
    type: FETCHING_CHARACTER_REQUEST
})

export const fetchingCharacterListSuccess = (json) => ({
    type: FETCHING_CHARACTER_SUCCESS,
    payload: json
})

export const fetchingCharacterListFailure = (error) => ({
    type: FETCHING_CHARACTER_FAILURE,
    payload: error
})
export const fetchingCharacterDetailsSuccess = (json) => ({
    type: FETCHING_CHARACTER_DETAILS_SUCCESS,
    payload:json
})

export const clearCharacter = () => ({
    type: CLEAR_DETAILS_CHARACTER,
    payload: {}
})


export const fetchCharacterList = () => {
    return async dispatch => {
        dispatch(fetchingCharacterListRequest());
        try {
            const url = `${URL_GLOBAL}${API_CHARACTER}`;
            const response = await fetch(url,{
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const responseBody = await response.json()
            console.log('responseBody',responseBody[0].name)
            const characterResult = []
            responseBody.map (item => {
                characterResult.push(
                    new Character(
                        item.char_id,
                        item.name,
                        item.birthday,
                        item.occupation,
                        item.img,
                        item.status,
                        item.nickname,
                        item.appearance,
                        item.portrayed,
                        item.category,
                        item.better_call_saul_appearance
                    )
                )
            })
            dispatch(fetchingCharacterListSuccess(characterResult))
        } catch(error) {
            dispatch(fetchingCharacterListFailure(error))
        }
    }
}

export const fetchCharacterById = id => {
    return async dispatch => {
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
            console.log('respndeBody',responseBody)
            await dispatch(fetchingCharacterDetailsSuccess(responseBody))
        } catch(error) {
           console.log(error)
        }
    }
}
export const clearDetailsCharacter = () => {
    return async dispatch => {
        dispatch(clearCharacter())
    }
}
