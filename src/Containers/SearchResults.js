import React from 'react'
import { View, ScrollView, Text, TouchableHighlight, ListView, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import SearchActions from '../Redux/SearchRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import RearchResultComponent from '../Components/RearchResultComponent'
import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/SearchResultsStyle'

class SearchResults extends React.Component {
  constructor (props) {
    super(props)
    let ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      fetching: false,
      dataSource: ds.cloneWithRows(['a','b','c']),
      error: null,
      keyword: this.props.keyword
    };
    this.renderRow=this.renderRow.bind(this);
    this.noRowData=this.noRowData.bind(this);
  }

  componentDidMount(){
    //console.log(this.state.keyword + '!!')
    this.setState({
          fetching: true
        });
    this.props.search(this.state.keyword);
  }

  componentWillReceiveProps (newProps) {
    if (newProps.repositories) {
      this.setState({
            fetching: false,
            dataSource: this.state.dataSource.cloneWithRows(newProps.repositories)
          });
    } else if(newProps.error){
      this.setState({err: newProps.error, fetching: newProps.fetching});
    }
  }

  renderRow(rowData){
      let display;
      if(rowData.full_name){
        display = <RearchResultComponent rowData={rowData} />
      }
      return (
        <View>
          {display}
        </View>
      );
  }

  noRowData () {
    return this.state.dataSource.getRowCount() === 0
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
        <ScrollView style={styles.mainContainer}>
          <View style={styles.container}>
            <AlertMessage title='No repositories found' show={this.noRowData()} />
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
              enableEmptySections={true}
              />
            </View>
        </ScrollView>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.repository.fetching,
    repositories: state.repository.repositories,
    error: state.repository.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (keyword) => dispatch(SearchActions.searchRequest(keyword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
