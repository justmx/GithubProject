import React from 'react'
import { Image, View } from 'react-native'
import styles from './Styles/TabIconStyle'
import {Images} from '../Themes'
export default class TabIcon extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.image}
          source={Images[this.props.title]}
        />
      </View>
    );
  }
}

// // Prop type warnings
TabIcon.propTypes = {
  title: React.PropTypes.string
}
