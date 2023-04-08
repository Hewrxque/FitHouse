import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181616',
    height: height,
    width: width,
  },
  contentTitle:{
    flex: 0.3,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content:{
    flex: 0.7,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
    top: 50
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
