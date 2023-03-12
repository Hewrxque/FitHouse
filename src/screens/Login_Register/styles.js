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
    width: 262,
    height: 44,
    top: 20,
  },
  text: {
    textAlign: 'center',
    color: '#00FF19',
    fontSize: 20,
  },
  text2: {
    textAlign: 'center',
    color: '#181616',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#1E1E1E',
    width: 270,
    height: 40,
    borderRadius: 10,
    borderColor: '#00FF19',
    borderWidth: 2,
    marginBottom: 20,
  },
  button2: {
    backgroundColor: '#ffffff',
    width: 270,
    height: 40,
    borderRadius: 10,
  },
  content: {
    width: '100%',
    paddingTop: 50,
    padding: 16,
  },
  arrow: {
    bottom: 50,
    paddingRight: 300,
  },
});

export default styles;
