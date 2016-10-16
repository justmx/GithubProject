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
//import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import Styles from './Styles/SearchStyle'

class Search extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      keyword: null
    }
    this.onSearchPressed = this.onSearchPressed.bind(this);
  }

  onSearchPressed(){
  //  console.log('Attempting to log in with username '+ this.state.username + this.state.password);
    //this.setState({fetching: true});
    //this.props.attemptLogin(this.state.username, this.state.password);
    NavigationActions.searchResult({keyword: this.state.keyword});
  }


  render () {
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.container}>
          <Image style={Styles.logo}
            source={Images.snowoctocat} />
            <Text style={Styles.heading}>
              Search Github
            </Text>
            <TextInput style={Styles.input}
               onChangeText={(text) => {this.setState({keyword: text})} }
               value={this.state.keyword}
               placeholder="Keyword" />
              <TouchableHighlight
                onPress={this.onSearchPressed}
                style={Styles.button}>
                <Text style={Styles.buttonText}>
                  Search
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

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

// <ActivityIndicator
//   animating={this.state.fetching}
//   size='large'
//   style={Styles.loader}
// />
