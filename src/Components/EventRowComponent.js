import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import moment from 'moment';
import styles from './Styles/EventRowComponentStyle'

export default class EventRowComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rowData: this.props.rowData
    };
  }

  render () {
    return (
      <TouchableHighlight
        onPress={()=> this.props.pressRow(this.state.rowData)}
        underlayColor='#ddd'>
        <View style={styles.container}>
          <Image source={{uri: this.state.rowData.actor.avatar_url}}
           style={styles.image}
           />
           <View style={styles.textView}>
             <Text style={styles.text}>{moment(this.state.rowData.created_at).fromNow()}</Text>
             <Text style={styles.text}><Text style={{color: 'red'}}>{this.state.rowData.actor.login}</Text> push to </Text>
             <Text style={styles.text}>{this.state.rowData.payload.ref.replace('refs/heads/', '')}</Text>
             <Text style={styles.text}>at <Text style={{color: 'blue', fontWeight: '600'}}>{this.state.rowData.repo.name}</Text></Text>
           </View>
        </View>
      </TouchableHighlight>
    )
  }
}

// Prop type warnings
EventRowComponent.propTypes = {
  rowData: React.PropTypes.object.isRequired,
  pressRow: React.PropTypes.func.isRequired
}
