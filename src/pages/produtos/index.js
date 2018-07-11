import React, { Component } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import styles from './styles';

import ListItem from '../../components//list/list';
import data from '../../../jsons/posts'

class Produtos extends Component {
    
    state = {
        loading: false,
        listProdutos: data
    }

    render() {
        const filter = this.state.listProdutos.filter( (item) => {
            return item.type === 2
        })
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <FlatList
                    data={filter}
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

export default Produtos;
