import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/RearchResultComponentStyle'
import {Images} from '../Themes'

export default class RearchResultComponent extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.nameText}>
          {this.props.rowData.full_name}
        </Text>
        <View style={styles.iconView}>
          <View style={styles.repoCell}>
            <Image style={styles.repoCellIcon} source={Images.star}></Image>
            <Text style={styles.repoCellLabel}>
              {this.props.rowData.stargazers_count}
            </Text>
          </View>
          <View style={styles.repoCell}>
            <Image style={styles.repoCellIcon} source={Images.fork}></Image>
            <Text style={styles.repoCellLabel}>
              {this.props.rowData.forks}
            </Text>
          </View>
          <View style={styles.repoCell}>
            <Image style={styles.repoCellIcon} source={Images.inbox}></Image>
            <Text style={styles.repoCellLabel}>
              {this.props.rowData.open_issues}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

// // Prop type warnings
RearchResultComponent.propTypes = {
  rowData: React.PropTypes.object
}
