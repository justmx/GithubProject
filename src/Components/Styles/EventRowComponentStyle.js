import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
     flex: 1,
     flexDirection: 'row',
     padding: 20,
     alignItems: 'center',
     borderBottomWidth: 1,
     borderColor: '#D7D7D7',
     backgroundColor: '#F5FCFF'
   },
   image: {
     height: 36,
     width: 36,
     borderRadius: 18
   },
   textView: {
     paddingLeft: 20,
     backgroundColor: '#F5FCFF'
   },
   text: {
     //backgroundColor: '#fff'
     backgroundColor: '#F5FCFF'
   }
})
