import {
  combineReducers
} from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    event: require('./EventRedux').reducer,
    login: require('./LoginRedux').reducer,
    repository: require('./SearchRedux').reducer
  })
  return configureStore(rootReducer, rootSaga)
}
