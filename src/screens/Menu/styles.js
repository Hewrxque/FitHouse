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
  image: {
    width: 262,
    height: 44,
    paddingTop: 15,
  },
  text: {
    textAlign: 'center',
    color: '#00FF19',
    fontSize: 20,
    fontFamily: 'Krona One',
  },
  text2: {
    textAlign: 'center',
    color: '#181616',
    fontSize: 20,
    fontFamily: 'Krona One',
  },
  button: {
    backgroundColor: '#ffffff',
    width: 140,
    height: 116,
    borderRadius: 10,
    textAlign: 'center'
  },
});

export default styles;
