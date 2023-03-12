import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
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
    width: 262,
    height: 44,
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
  },
  text1: {
    color: '#00FF19',
    fontSize: 15,
    textAlign: 'left',
  },
  text2: {
    textAlign: 'left',
    color: '#ffffff',
    fontSize: 15,
    textAlign: "justify"
  },
});
export default styles;
