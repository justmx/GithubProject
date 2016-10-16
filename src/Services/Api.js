// a library to wrap and simplify api calls
import buffer from 'buffer';
import {AsyncStorage} from 'react-native';
const authKey = 'auth';
const userKey = 'user';
const nameKey = 'name';
import _ from 'lodash';
import apisauce from 'apisauce';


const create = (baseURL = 'https://api.github.com') => {

  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    timeout: 10000
  })

  // Force OpenWeather API Key on all requests
  // api.addRequestTransform(request => {
  //   request.params['APPID'] = '0e44183e8d1018fc92eb3307d885379c'
  // })

  // Wrap api's addMonitor to allow the calling code to attach
  // additional monitors in the future.  But only in __DEV__ and only
  // if we've attached Reactotron to console (it isn't during unit tests).
  // if (__DEV__ && console.tron) {
  //   console.tron.log('Hello, I\'m an example of how to log via Reactotron.')
  //   api.addMonitor(console.tron.apisauce)
  // }

  const getAuthInfo = async function() {
    try {
      let userInfo;
      userInfo = await AsyncStorage.multiGet([
        nameKey, authKey, userKey
      ], (err, val) => {
        if (err) {
          throw err;
        }
      })
      if (!userInfo) {
        return null
      } else {
        let zippedObj = _.fromPairs(userInfo);
        if (!zippedObj[authKey]) {
          return {authInfo: null};
        }
        let authInfo = {
          username: zippedObj[nameKey],
          header: {
            Authorization: 'Basic ' + zippedObj[authKey]
          },
          user: JSON.parse(zippedObj[userKey])
        }
        return authInfo;
      }
    } catch (error) {
      return null
    }
  }

  const login = async function(creds) {
    try {
      let b = new buffer.Buffer(creds.username + ':' + creds.password);
      let encodedAuth = b.toString('base64');
      api.setHeader('Authorization', 'Basic ' + encodedAuth);
      let response = await api.get('user');
      let responsedata = JSON.stringify(response.data);
      if (response.status >= 200 && response.status < 300) {
        let multi_set_pairs = [
          [
            nameKey, creds.username
          ],
          [
            authKey, encodedAuth
          ],
          [userKey, responsedata]
        ];
        await AsyncStorage.multiSet(multi_set_pairs, (err) => {
          if (err) {
            console.log(err);
            throw err;
          }
        });
        return response.data;
      } else {
        let err = {
          error: true,
          badCredentials: response.status == 401,
          unknownError: response.status != 401
        }
        console.log(err);
        return err;
      }
    } catch (error) {
      console.log(error);
      return {error: true, badCredentials: false, unknownError: true}
    }
  }

  const getEvents = async function(_header) {
    try {
      //let api = apisauce.create({baseURL, headers: _header, timeout: 10000});
      api.setHeaders(_header);
      let response = await api.get('events');
      console.log(response);
      if (response.ok) {
        let feedItems = response.data.filter((ev) => ev.type == 'PushEvent');
        return feedItems;
      }
    } catch (error) {
      console.log(error);
      return {
        error: (error
          ? error
          : 'Unable to get Events')
      }
    }
  }

  const getRepositories = async function(_header, _keyword) {
    try {
      api.setHeaders(_header);
      //let api = apisauce.create({baseURL, headers: _header, timeout: 10000});
      let response = await api.get('search/repositories', {q: _keyword});
      console.log(response);
      if (response.ok) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
      return {
        error: (error
          ? error
          : 'Unable to Search')
      }
    }
  }

  return {
    getAuthInfo,
    login,
    getEvents,
    getRepositories
  }
}


export default {
  create
}
