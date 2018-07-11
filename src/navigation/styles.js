import { StyleSheet } from 'react-native';
import { colors, metrics } from '../styles';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  ViewHeader: {
    height: 70,
    paddingTop: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backbutton: {
    color: colors.white,
    backgroundColor: colors.white,
    flex: 1,
    width: 1,
    fontSize: 1,
    left: 0,
  },
  containerTitle: {
    color: colors.white,
    fontSize: 18,
  },
  Logo: {
    width: 120,
    height: 32,
    justifyContent: 'center',
    marginLeft: Platform.OS === 'ios' ? 0 : 26,
    alignItems: 'center'
  }
});

export default styles;
