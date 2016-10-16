import React from 'react'
import { View, ScrollView, Text, TouchableHighlight, ListView, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import EventActions from '../Redux/EventRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import EventRowComponent from '../Components/EventRowComponent'

// Styles
import styles from './Styles/GithubEventStyle'

class GithubEvent extends React.Component {
  constructor (props) {
    super(props)
    let ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      fetching: false,
      dataSource: ds.cloneWithRows(['a','b','c'])
    };
    this.renderRow=this.renderRow.bind(this);
    this.pressRow=this.pressRow.bind(this);
  }

  componentDidMount(){
    this.setState({
          fetching: true
        });
    this.props.getEvents();
  }

  pressRow(rowData){
  console.log(rowData);
  NavigationActions.pushPayload({PushEvent: rowData});
}


  componentWillReceiveProps (newProps) {
    if (newProps.events) {
      this.setState({
            fetching: false,
            dataSource: this.state.dataSource.cloneWithRows(newProps.events)
          });
    } else if(newProps.error){
      this.setState({err: newProps.error, fetching: newProps.fetching});
    }
  }

  renderRow(rowData){
  //let display_name = rowData.actor ? rowData.actor.login : rowData;
    let display;
    if(rowData.actor){
      display = <EventRowComponent rowData={rowData} pressRow={this.pressRow}/>
    }
    return (
      <View>
        {display}
      </View>
    );
}

  render () {
    if(this.state.fetching){
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            animating={true}
            size='large'
            style={styles.loader}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.mainContainer}>
          <ScrollView>
            <View style={styles.container}>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                enableEmptySections={true}
                />
              </View>
          </ScrollView>
      </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.event.fetching,
    events: state.event.events,
    error: state.event.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: () => dispatch(EventActions.eventRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GithubEvent)
