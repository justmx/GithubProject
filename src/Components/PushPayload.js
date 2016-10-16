import React from 'react'
import {
  Text,
  View,
  ListView,
  Image
} from 'react-native';
import styles from './Styles/PushPayloadStyle'
import moment from 'moment'

export default class PushPayload extends React.Component {
  constructor(props){
    super(props);
    let ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(props.PushEvent.payload.commits)
    };
    this.renderRow=this.renderRow.bind(this);
}

  renderRow(rowData){
    return(
      <View style={styles.row}>
        <Text>{rowData.sha.substring(0,6)} - {rowData.message}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Image source={{uri: this.props.PushEvent.actor.avatar_url}}
           style={styles.image}
           />
          <Text style={styles.created_at}>{moment(this.props.PushEvent.created_at).fromNow()}</Text>
          <Text><Text style={styles.bold}>{this.props.PushEvent.actor.login}</Text></Text>
          <Text>{this.props.PushEvent.payload.ref.replace('refs/heads/', '')}</Text>
          <Text>at {this.props.PushEvent.repo.name}</Text>
          <Text style={styles.commits}>{this.props.PushEvent.payload.commits.length} Commits</Text>
          <ListView
            contentInset={{
              top: -50
            }}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            enableEmptySections={true}
          />
        </View>
      </View>
    );
  }
}

// // Prop type warnings
PushPayload.propTypes = {
  PushEvent: React.PropTypes.object.isRequired
}
