import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Metrics.titlePadding,
    backgroundColor: '#F5FCFF',
    // borderTopColor: 'black',
    // borderLeftColor: 'black',
    borderColor: 'black'
  },
  image: {
    marginTop: 10,
    width:30,
    height: 30
  }
})
