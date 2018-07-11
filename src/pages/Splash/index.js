import React, { Component } from 'react';
import { View, Image, } from 'react-native';
import { NavigationActions } from "react-navigation";

export default class Splash extends Component {
  componentDidMount(){
    setTimeout(this.doRouting, 2000);
  }
  doRouting = async () => {
    routeName = "Main";
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName})]
    }))

  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#ccc'}}>
        <Image source={require("../../../img/nextel-logo.png")} style={{width: 150, height: 40 }} />
      </View>
    );
  }
}
