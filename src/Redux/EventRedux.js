import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  eventRequest: null,
  eventSuccess: ['events'],
  eventFailure: null
})

export const EventTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  events: null,
  fetching: null,
  error: null
})

/* ------------- Reducers ------------- */


export const request = (state, action) =>
  state.merge({ fetching: true })


export const success = (state, action) => {
  const { events } = action
  return state.merge({ fetching: false, error: null, events })
}


export const failure = state =>
  state.merge({ fetching: false, error: true, events: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EVENT_REQUEST]: request,
  [Types.EVENT_SUCCESS]: success,
  [Types.EVENT_FAILURE]: failure
})
