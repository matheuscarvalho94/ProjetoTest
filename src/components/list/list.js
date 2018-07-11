import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';

import styles from './styles';

class ListItem extends Component {
  render() {

    const { item, navigation, ViewPrecos } = this.props;
    if(!item) return (<View/>)

    return (
        <TouchableOpacity onPress={() => { navigation.navigate({ routeName: 'Detail', params: { item, ViewPrecos } }); }} style={styles.container}>
            <Image style={styles.avatar} source={{ uri: item.imagem }} />
            <View style={styles.info}>
                <Text style={styles.title}  numberOfLines={2}>{item.nome}</Text>
                <Text style={styles.description} numberOfLines={1}>{item.body}</Text>
            </View>
        </TouchableOpacity>
    );
  }
}

export default ListItem;
