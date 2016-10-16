import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'


export default StyleSheet.create({
  // container: {
  //   flex: 1,
  //   marginTop: Metrics.navBarHeight,
  //   backgroundColor: Colors.background
  // }
  mainContainer: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.transparent,
    marginBottom: 40,
    borderBottomColor: 'black'
  },
  loaderContainer: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'flex-start'
  },
  container: {
      flex: 1,
      justifyContent: 'flex-start',
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
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
