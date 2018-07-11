import React from "react";
import { Platform, Image } from "react-native";
import { StackNavigator, TabNavigator } from 'react-navigation';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { colors } from '../styles';
import styles from './styles';


//pages
import Home from '../pages/home';
import Posts from '../pages/posts';
import Produtos from '../pages/produtos';
import Detail from '../pages/details';

const navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <Image
    source={require('../../img/nextel-logo.png')}
    style={styles.Logo}/>
  ),
  headerStyle: {
    backgroundColor: colors.darker,
    height: 60,
    paddingTop: 10,
   },
   headerBackTitle: null,
   headerLeft: null,

})

export const NavigationHome = StackNavigator({
  Home: { screen: Home },
  Detail: { screen: Detail },
  },
  {
    navigationOptions
  }
);

export const NavigationPosts = StackNavigator({
  Posts: { screen: Posts },
},
  {
    navigationOptions
  }
);

export const NavigationProduto = StackNavigator({
  Produtos: { screen: Produtos },
  Detail: { screen: Detail },
},
  {
    navigationOptions
  }
);

export const Main = TabNavigator({
  NavigationHome: {
    screen: NavigationHome,
    navigationOptions: {
      tabBarLabel: "Todos",
      tabBarIcon: ({ tintColor }) => <FontAwesome style={{fontSize: 25}} color={tintColor}>{Icons.star}</FontAwesome>
    },
  },
  NavigationPosts: {
    screen: NavigationPosts,
    navigationOptions: {
      tabBarLabel: "Posts",
      tabBarIcon: ({ tintColor }) => <FontAwesome style={{fontSize: 25}} color={tintColor}>{Icons.clipboard}</FontAwesome>
    },
  },

  NavigationProduto: {
    screen: NavigationProduto,
    navigationOptions: {
      tabBarLabel: "Produtos",
      tabBarIcon: ({ tintColor }) => <FontAwesome style={{fontSize: 25}} color={tintColor}>{Icons.shoppingBag}</FontAwesome>
    },
  },
},
{
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#fff',
      inactiveTintColor:'#999999',
      iconStyle: {
          padding: 0,
          margin: 0,
          width: Platform.OS === 'ios' ? 90 : 20,
          height: Platform.OS === 'ios' ? 90 : 20,
      },
      style: {
        backgroundColor: colors.secundary,
        height: Platform.OS === 'ios' ? 60 : 60,
        padding: 0,
        paddingTop: 0,
      },
      labelStyle: {
        fontSize: Platform.OS === 'ios' ? 15 : 15,
      },
      indicatorStyle: {
          backgroundColor: 'white'
      },
    }
},
);

const MainNavigator = StackNavigator({
  Main: { screen: Main }
},{
  headerMode: "none",
}
);

export default MainNavigator;
