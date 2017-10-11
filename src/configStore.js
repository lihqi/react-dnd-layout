import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const rootReducer = combineReducers(reducers);

// const log = __debug__ ? logger : (store => next => action => next(action))
const log = createLogger()
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}