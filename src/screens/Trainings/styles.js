import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
    height: height,
    width: width,
  },
  content1:{
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  text1: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'KronaOne-Regular',
    bottom: 30
  },
  image: {
    width: 320,
    height: 70,
    top: 20,
  },
  text: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 20,
    fontFamily: 'KronaOne-Regular',
  },
  button: {
    width: 296,
    height: 67,
    borderRadius: 8,
    backgroundColor: '#404040',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    paddingTop: 50,
    padding: 16,
  },
  arrow: {
    position: 'absolute',
    top: 20,
    left: 11,
  },
});

export default styles;
