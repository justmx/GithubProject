import {StyleSheet} from 'react-native'
import {Colors, Metrics, ApplicationStyles} from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  //  alignItems: 'center',
    borderBottomWidth: 1
  },
  repoCellLabel: {
    textAlign: 'center'
  },
  nameText: {
    fontSize: 20,
    fontWeight: '600'
  },
  repoCellIcon: {
    width: 20,
    height: 20
  },
  repoCell: {
    width: 50,
    alignItems: 'center'
  },
  iconView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20
  }
})
