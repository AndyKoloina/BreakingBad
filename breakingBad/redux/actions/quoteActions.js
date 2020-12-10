import {
    RANDOM_QUOTE,
    URL_GLOBAL,
    API_RANDOM_QUOTE,
    RANDOM_QUOTE_FAILURE
} from '../../constants'


export const randomQuote = (quote) => ({
    type: RANDOM_QUOTE,
    payload: quote
})

export const randomQuoteFailure = (error) => ({
    type: RANDOM_QUOTE_FAILURE,
    payload: error
})


export const getRandomQuote = () => {
    return async dispatch => {
        try {
            const url = `${URL_GLOBAL}${API_RANDOM_QUOTE}`;
            const response = await fetch(url,{
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const responseBody = await response.json()
            
            dispatch(randomQuote(responseBody))
        } catch(error) {
            dispatch(randomQuoteFailure(error))
        }
    }
}

