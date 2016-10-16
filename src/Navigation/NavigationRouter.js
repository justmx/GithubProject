import React, { Component } from 'react'
import { Scene, Router, ActionConst } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import {Images} from '../Themes'
import {
  View,
  Text,
  TextInput,
  Image,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native'
// screens identified by the router
//import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import InitialPage from '../Containers/InitialPage'
import GithubLogin from '../Containers/GithubLogin'
import AppContainer from '../Containers/AppContainer'
import GithubEvent from '../Containers/GithubEvent'
import Search from '../Containers/Search'
import TabIcon from '../Components/TabIcon'
import { Actions as NavigationActions } from 'react-native-router-flux'
import PushPayload from '../Components/PushPayload'
import SearchResults from '../Containers/SearchResults'
import App from '../Containers/App'
import NativebaseTutorial from '../Components/NativebaseTutorial'
class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene initial key='initialPage' component={InitialPage} title='Github' hideNavBar />
        <Scene key='githublogin' component={GithubLogin} title='Github Login' hideNavBar/>
          <Scene key="main" tabs={true} tabBarIconContainerStyle={{  backgroundColor: '#F5FCFF', borderColor: 'black', borderTopWidth: 2, marginTop: 2 }} >
            <Scene key="tab1"  icon={TabIcon} title="inbox" initial={true} navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton} onPress={()=> NavigationActions.tab1()}>
                  <Scene initial key='appContainer' component={AppContainer} title='Task' />
                  <Scene key='pushPayload' component={PushPayload} title='Push Event' />
                  <Scene key='event' component={GithubEvent} title='Events'/>
            </Scene>
            <Scene key="tab2"  icon={TabIcon} title="search" navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton} onPress={()=> NavigationActions.tab2()} >
                  <Scene initial key='search' component={Search} title='Search' />
                  <Scene key='searchResult' component={SearchResults} title='Search Results'/>
            </Scene>
          </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
