import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#404040',
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
  },
  button: {
    width: 296,
    height: 67,
    borderRadius: 8,
    backgroundColor: '#404040',
    borderColor: '#00FF19',
    borderWidth: 2,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
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
