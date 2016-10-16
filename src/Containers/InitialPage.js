import React from 'react'
import { ScrollView, Text, ActivityIndicator, Image, TouchableHighlight, View } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import {Images, Metrics} from '../Themes'
import StartupActions from '../Redux/StartupRedux'
//import LoginActions, { isLoggedIn } from '../Redux/LoginRedux'
// Styles
import Styles from './Styles/InitialPageStyle'


class InitialPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.onLogin=this.onLogin.bind(this);
  }

  componentDidMount () {
    this.props.startup();
  }
  onLogin(){
    NavigationActions.githublogin();
  }

  render () {
     return (
      <View style={Styles.mainContainer}>
        <View style={Styles.container}>
          <Image style={Styles.logo}
            source={Images.glogo} />
            <Text style={Styles.heading}>
              GitHut Browser
            </Text>
            <TouchableHighlight
              onPress={this.onLogin}
              style={Styles.button}>
              <Text style={Styles.buttonText}>
                Log in
              </Text>
            </TouchableHighlight>
        </View>
      </View>
)
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapStateToDispatch = dispatch => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapStateToDispatch)(InitialPage)
