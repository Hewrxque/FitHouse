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
    top: 20,
  },
  text: {
    textAlign: 'center',
    color: '#00FF19',
    fontSize: 20,
    fontFamily: 'KronaOne-Regular'
  },
  text2: {
    textAlign: 'center',
    color: '#181616',
    fontSize: 20,
    fontFamily: 'KronaOne-Regular'
  },
  button: {
    backgroundColor: '#1E1E1E',
    width: 270,
    height: 40,
    borderRadius: 10,
    borderColor: '#00FF19',
    borderWidth: 2,
    marginBottom: 20,
    justifyContent: "center"
  },
  button2: {
    backgroundColor: '#ffffff',
    width: 270,
    height: 40,
    borderRadius: 10,
    justifyContent: "center"
  },
  content: {
    width: '100%',
    paddingTop: 50,
    padding: 16,
  },
  arrow: {
    position: 'absolute',
    top: 20,
    left: 11
  },
});

export default styles;
