import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  searchRequest: ['keyword'],
  searchSuccess: ['repositories'],
  searchFailure: null
})

export const SearchTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  repositories: null,
  fetching: null,
  error: null
})

/* ------------- Reducers ------------- */


export const request = (state, action) =>
  state.merge({ fetching: true })


export const success = (state, action) => {
  const { repositories } = action
  return state.merge({ fetching: false, error: null, repositories })
}


export const failure = state =>
  state.merge({ fetching: false, error: true, repositories: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_REQUEST]: request,
  [Types.SEARCH_SUCCESS]: success,
  [Types.SEARCH_FAILURE]: failure
})
