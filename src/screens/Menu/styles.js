import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#181616',
    paddingTop: 15,
  },
  arrow: {
    position: 'absolute',
    top: 20,
    left: 11,
  },
  text: {
    textAlign: 'center',
    color: '#00FF19',
    fontSize: 30,
    fontFamily: 'KronaOne-Regular',
  },
  text2: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'KronaOne-Regular',
  },
  button: {
    backgroundColor: '#404040',
    width: 160,
    height: 160,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
