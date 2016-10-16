import { call, put } from 'redux-saga/effects'
//import GithubApi from '../Services/GithubApi'
import EventActions from '../Redux/EventRedux'

export function * getEvents (api, action) {
  // const userInfo =  yield call(GithubApi.getAuthInfo);
  // const eventResults =  yield call(GithubApi.getEvents, userInfo.header);
  const userInfo =  yield call(api.getAuthInfo);
  const eventResults =  yield call(api.getEvents, userInfo.header);
  if(eventResults.error){
    yield put(EventActions.eventFailure(eventResults));
  } else{
    console.log(eventResults.length);
    yield put(EventActions.eventSuccess(eventResults));
  }
}
