import { createStore , applyMiddleware,combineReducers} from 'redux'
import characterReducer from '../redux/reducers/characterListReducer'
import characterDetailsReducer from '../redux/reducers/CharacterDetailsReducer'
import thunk from 'redux-thunk'

// const reducer = combineReducers({ characterReducer, characterDetailsReducer});

// export const store = createStore(
//     characterReducer,
//     applyMiddleware(thunk)
//   );
const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
export const store = createStoreWithMiddleWare(characterReducer);
console.log('configureStore',store.getState())