import { put, select, call } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'


// exported to make available for tests
//export const selectTemperature = state => state.temperature.temperature

// process STARTUP actions
export function * startup (api, action) {
  console.log('Start UP Action!');
  const userInfo =  yield call(api.getAuthInfo);
  //const userInfo =  yield call(GithubApi.getAuthInfo);
  console.log(userInfo);
  if(userInfo){
    yield put(LoginActions.loginCheck(userInfo.user));
      console.log(userInfo.user.login);
  }
}
