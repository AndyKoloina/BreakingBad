import { createStore , applyMiddleware,combineReducers} from 'redux'
import characterReducer from '../redux/reducers/characterListReducer'
import quoteReducer from '../redux/reducers/quoteReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({ characterReducer, quoteReducer});

export const store = createStore(
    reducers,
    applyMiddleware(thunk)
  );

