import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181616',
  },
  content:{
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '10%',
  },
  text: {
    textAlign: 'center',
    color: '#181616',
    fontSize: 20,
    fontFamily: 'KronaOne-Regular'
  },
  button: {
    backgroundColor: '#00FF19',
    width: 300,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center'
  },
});

export default styles;
