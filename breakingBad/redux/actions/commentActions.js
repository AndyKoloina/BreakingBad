import {
    ADD_COMMENTS,
    LIST_COMMENTS
} from '../../constants'

export const saveComments = (value) => ({
    type: ADD_COMMENTS,
    value: value
})

export const listComponents = data => ({
    type: LIST_COMMENTS,
    payload: data
})

export const addComponents = (data) =>{
    return async dispatch => {
        dispatch(saveComments(data))
    }
}

