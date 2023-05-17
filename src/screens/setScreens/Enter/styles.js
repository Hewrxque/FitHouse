import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
    height: height,
    width: width,
  },
  content:{
    flex: 0.5,
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  //  backgroundColor: '#FF00FF',
  },
  content1:{
    flex: 0.5,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
  //  backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: '40%',
    marginTop: '50%'
  },
  text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'KronaOne-Regular',
  },
  text2: {
    textAlign: 'center',
    color: '#181616',
    fontSize: 20,
    fontFamily: 'KronaOne-Regular',
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 10,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    marginBottom: 20,
    justifyContent: 'center',
  },
  button2: {
    backgroundColor: '#ffffff',
    width: 300,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
  },
  arrow: {
    position: 'absolute',
    top: 20,
    left: 11,
  },
});

export default styles;
