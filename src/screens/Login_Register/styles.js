import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181616',
    height: height,
    width: width,
  },
  content: {
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
    color: '#00FF19',
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
    backgroundColor: '#1E1E1E',
    width: 300,
    height: 50,
    borderRadius: 10,
    borderColor: '#00FF19',
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
