import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#181616',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
  },
  image: {
    width: 320,
    height: 70,
    paddingTop: 15,
  },
  text: {
    textAlign: 'center',
    color: '#181616',
    fontSize: 20,
    fontFamily: 'KronaOne-Regular'
  },
  button: {
    backgroundColor: '#00FF19',
    width: 270,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center'
  },
});

export default styles;
