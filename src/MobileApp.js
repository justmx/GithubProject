import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './Containers/RootContainer';
import createStore from './Redux'
import NavigationRouter from './Navigation/NavigationRouter'

const store = createStore()

class MobileApp extends Component {
  render () {
    return (
      <Provider store={store}>
        <NavigationRouter />
      </Provider>
    )
  }
}

export default MobileApp
// <RootContainer />
