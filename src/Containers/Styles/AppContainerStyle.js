import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'


export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    // marginTop: Metrics.navBarHeight,
    // backgroundColor: Colors.transparent
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: 150,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding:10
  },
  loader: {
    marginTop: 20
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  logo: {
    width:66,
    height: 55
  },
  heading: {
    fontSize: 30,
    marginTop: 10
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    height:50,
    backgroundColor: '#48bbec',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  }
})
