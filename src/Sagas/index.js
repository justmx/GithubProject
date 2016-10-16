import { takeLatest } from 'redux-saga'
import API from '../Services/Api'
// import FixtureAPI from '../Services/FixtureApi'
// import DebugSettings from '../Config/DebugSettings'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { EventTypes } from '../Redux/EventRedux'
import { SearchTypes } from '../Redux/SearchRedux'
/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from './LoginSagas'
import { getEvents } from './EventSagas'
import { getSearch } from './SearchSagas'

/* ------------- API ------------- */
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup, api),
    takeLatest(LoginTypes.LOGIN_REQUEST, login, api),
    takeLatest(EventTypes.EVENT_REQUEST, getEvents, api),
    takeLatest(SearchTypes.SEARCH_REQUEST, getSearch, api)
  ]
}
