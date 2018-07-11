import React from 'react';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { ScrollView, View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import styles from './styles';





const Detail = ({ navigation }) => {
  const { item } = navigation.state.params;

  HidePrecos = () => {
    if(item.preco!=null){
      return (
        <View>
          <View style={styles.SubHeader}>
            <Text style={styles.TxtTitle}>VALORES:</Text>
          </View>
          <View style={styles.ContainerPryce}>
            <Text style={styles.TxtPryce}>
              Preço: R$: {item.preco}
            </Text>
          </View>
        </View>
      );
    }
  }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.thumbnail}
        source={{ uri: item.imagem }}
        blurRadius={1}
      >
      <View style={styles.thumbnailContent}>
        <Text style={styles.title}>{item.nome}</Text>
      </View>
      </ImageBackground>
      {
        this.HidePrecos()
      }
      <View style={styles.SubHeader}>
        <Text style={styles.TxtTitle}>SOBRE:</Text>
      </View>
      <View style={styles.ContainerProduct}>
        <Text style={styles.descriptiontext}>{item.body}</Text>
      </View>
    </ScrollView>
  );
};

Detail.navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity style={{margin: 20}} onPress={() => navigation.goBack()}>
        <FontAwesome style={styles.iconebutton} >{Icons.chevronLeft}</FontAwesome>
      </TouchableOpacity>
    ),
});

export default Detail;
