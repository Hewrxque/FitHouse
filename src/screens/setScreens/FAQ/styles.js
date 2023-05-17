import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#404040',
    height: height,
    width: width
  },
  contentImage:{
    marginHorizontal: 10,
    marginVertical: 10,
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content:{
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 0.5,
    justifyContent: 'center',
  
  },
  image: {
    width: '100%',
    height: '50%',
  },
  arrow: {
    position: 'absolute',
    top: 20,
    left: 11
  },
  text: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 30,
    fontFamily: 'KronaOne-Regular',
    margin: 10
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'KronaOne-Regular',
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    margin: 10
  },
  text2: {
    textAlign: 'left',
    color: '#ffffff',
    fontSize: 15,
    textAlign: "justify",
    margin: 10
  },
  text3: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 10,
    textAlign: "justify",
    fontFamily: 'KronaOne-Regular'
  },
});
export default styles;
