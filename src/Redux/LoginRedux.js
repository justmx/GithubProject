import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['userInfo'],
  loginFailure: ['error'],
  loginCheck: ['userInfo'],
  logout: null
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  userInfo: null,
  error: null,
  fetching: false,
  success: false
})

/* ------------- Reducers ------------- */

// we're attempting to login
export const request = state => state.merge({ fetching: true })

// we've successfully logged in
export const success = (state, { userInfo }) =>
  state.merge({ fetching: false, error: null,success: true, userInfo })

export const logincheck = (state, { userInfo }) =>
  state.merge({ fetching: false, error: null,success: false, userInfo })

// we've had a problem logging in
export const failure = (state, { error }) =>
  state.merge({ fetching: false, error })

// we've logged out
export const logout = state => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGIN_CHECK]: logincheck,
  [Types.LOGOUT]: logout
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isLoggedIn = loginState => loginState.success == true
