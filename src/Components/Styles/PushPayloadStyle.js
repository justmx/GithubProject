import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.transparent
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding:10
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    borderColor: '#D7D7D7',
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
    padding: 10
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60
  },
  bold: {
    fontSize: 16,
    fontWeight: '800'
  },
  created_at: {paddingTop: 20,
                paddingBottom: 20,
                fontSize: 20
  },
  commits: {paddingTop: 40,
                fontSize: 20
  }
})
