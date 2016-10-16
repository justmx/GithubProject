import { put, call } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'
//import GithubApi from '../Services/GithubApi'
const authKey = 'auth';
const userKey = 'user';
import _ from 'lodash';
import buffer from 'buffer';
import {AsyncStorage} from 'react-native';
// attempts to login
export function * login (api, action) {
    console.log(action);
    const {username, password} = action;
     console.log('loginResults ');
     const loginResults =  yield call(api.login,  {username, password});
     //const loginResults =  yield call(GithubApi.login,  {username, password});
     console.log(loginResults);
     if(loginResults.error){
        yield put(LoginActions.loginFailure(loginResults));
     } else{
       yield put(LoginActions.loginSuccess(loginResults));
     }
}
