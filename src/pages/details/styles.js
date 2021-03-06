import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';
import { Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  thumbnail: {
    width: '100%',
    height: 250,
  },

  ContainerPryce: {
    padding: metrics.basePadding,
  },

  TxtPryce: {
    fontSize: 18,
    color: colors.darker,
  },

  SubHeader: {
    width: '100%',
    backgroundColor: colors.white,
    padding: metrics.basePadding,
  },

  TxtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darker,
  },

  ContainerProduct: {
    padding: metrics.basePadding,
  },

  descriptiontext: {
    color: colors.darker,
    fontSize: 17,
  },

  thumbnailContent: {
    flex: 1,
    paddingLeft: Platform.OS === 'ios' ? 0 : 22,
    backgroundColor: colors.darkTransparent,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },

  author: {
    fontSize: 18,
    color: colors.whiteTransparent,
    marginTop: metrics.baseMargin / 2,
  },

  ContainerButtons: {
    padding: metrics.basePadding,
    alignItems: 'center',
  },
  buttonEdit: {
    height: 50,
    backgroundColor: '#025222',
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
    width: '100%',
    flexDirection: 'row',
  },
  buttonEvents: {
    height: 50,
    backgroundColor: '#f70303',
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
    width: '100%',
    flexDirection: 'row',
  },
  iconebutton: {
    fontSize: 20,
    color: colors.white,
    marginRight: 10,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
