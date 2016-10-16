import React from 'react'
import { ScrollView, Text, TouchableHighlight, View, Image } from 'react-native'
import { connect } from 'react-redux'
//import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/AppContainerStyle'

class AppContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      userInfo: this.props.userInfo
    }
    this.onPressEvents = this.onPressEvents.bind(this);
    this.onPressSearch = this.onPressSearch.bind(this);
  }

  onPressEvents(){
    NavigationActions.event();
  }

  onPressSearch(){
    NavigationActions.tab2();
  }

  render () {
    return (
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Image source={{uri: this.props.userInfo.avatar_url}}
             style={styles.image}
             />
           <Text>Hi  <Text style={styles.bold}>{this.state.userInfo.login}</Text> Welcome!</Text>
             <TouchableHighlight
               onPress={this.onPressEvents}
               style={styles.button}>
               <Text style={styles.buttonText}>
               Check the latest Event!
               </Text>
             </TouchableHighlight>

             <TouchableHighlight
               onPress={this.onPressSearch}
               style={styles.button}>
               <Text style={styles.buttonText}>
               Search repositories!
               </Text>
             </TouchableHighlight>
          </View>
        </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.login.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
