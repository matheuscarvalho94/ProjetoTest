import React, { Component } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import styles from './styles';

import ListItem from '../../components//list/list';
import data from '../../../jsons/posts'

class Home extends Component {
  
  state = {
      list: data
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <FlatList
          data={this.state.list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
          <ListItem
            item={item}
            navigation={ this.props.navigation}
          />
          }
        />
      </View>
    );
  }
}

export default Home;
