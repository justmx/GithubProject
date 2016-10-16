import {
  call,
  put
} from 'redux-saga/effects'
//import GithubApi from '../Services/GithubApi'
import SearchActions from '../Redux/SearchRedux'

export function* getSearch(api, action) {
  const {
    keyword
  } = action;
  //const userInfo = yield call(GithubApi.getAuthInfo);
  const userInfo = yield call(api.getAuthInfo);
  const searchResults = yield call(api.getRepositories, userInfo.header, keyword);
  //const searchResults = yield call(GithubApi.getRepositories, userInfo.header, keyword);
  if (searchResults.error) {
    yield put(SearchActions.searchFailure(searchResults));
  } else {
    console.log(searchResults.items.length);
    yield put(SearchActions.searchSuccess(searchResults.items));
  }
}
