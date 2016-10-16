import React, {PropTypes} from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native'
import { connect } from 'react-redux'
import {Images, Metrics} from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import Styles from './Styles/GithubLoginStyle'

class GithubLogin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: this.props.username,
      password: '',
      fetching: this.props.fetching,
      err: this.props.error,
      success: false
    };
   this.onLoginPressed = this.onLoginPressed.bind(this);
}


onLoginPressed(){
//  console.log('Attempting to log in with username '+ this.state.username + this.state.password);
  this.setState({fetching: true});
  this.props.attemptLogin(this.state.username, this.state.password);
}

componentWillMount(){
  if(this.props.username){
    console.log('Login successfully!');
    NavigationActions.main();
  }
}


componentWillReceiveProps (newProps) {
  //Invoked when a component is receiving new props. This method is not called for the initial render.
  //check requirement for login
  //if(newProps.username){
  if (newProps.username && newProps.success) {
    NavigationActions.main();
  } else if(newProps.error){
    this.setState({err: newProps.error, fetching: newProps.fetching});
  } else if(newProps.username){
    this.setState({username: newProps.username});
  }
}

  render () {
    let errorCtrl = <View />;
    if(this.state.err){
      if(this.state.err.badCredentials){
        errorCtrl = <Text style={Styles.error}>
          That username and password combination did not work
          </Text>
      } else if (this.state.err.unknownError) {
        errorCtrl = <Text style={Styles.error}>
          We experienced an unexpected issue
          </Text>
      }
  }
  //console.log('hihis'+this.state.username);
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.container}>
          <Image style={Styles.logo}
            source={Images.glogo} />
            <Text style={Styles.heading}>
              GitHut Browser
            </Text>
            <TextInput style={Styles.input}
               onChangeText={(text) => {this.setState({username: text})} }
               value={this.state.username}
               placeholder="Github username" />
             <TextInput style={Styles.input}
               onChangeText={(text) => {this.setState({password: text})} }
               placeholder="Github password" secureTextEntry={true}/>
              <TouchableHighlight
                onPress={this.onLoginPressed}
                style={Styles.button}>
                <Text style={Styles.buttonText}>
                Log in
                </Text>
              </TouchableHighlight>
              {errorCtrl}
              <ActivityIndicator
                animating={this.state.fetching}
                size='large'
                style={Styles.loader}
              />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.login.fetching,
    username: state.login.userInfo ? state.login.userInfo.login: '',
    error: state.login.error,
    success: state.login.success
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GithubLogin)
