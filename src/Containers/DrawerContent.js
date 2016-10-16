import React, { Component } from 'react'
import { ScrollView, Image } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions, ActionConst } from 'react-native-router-flux'

class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressEvents = () => {
    this.toggleDrawer()
    NavigationActions.tab1();

  }
//{type: ActionConst.REPLACE}
  handleSearch = () => {
    this.toggleDrawer();
    NavigationActions.tab2();
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.gitHubMark} style={styles.logo} />
        <DrawerButton text='Events' onPress={this.handlePressEvents} />
        <DrawerButton text='Search'  onPress={this.handleSearch}/>
      </ScrollView>
    )
  }
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
