import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
    height: height,
    width: width,
  },
  content: {
    flex: 0.3,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content1: {
    flex: 0.4,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content2: {
    flex: 0.3,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  image: {
    width: 262,
    height: 44,
  },
  input: {
    backgroundColor: '#1E1E1E',
    width: 350,
    height: 52,
    borderRadius: 8,
    borderColor: '#F20000',
    borderWidth: 2,
    paddingHorizontal: 8,
    fontSize: 15,
    marginVertical: 5,
    fontFamily: 'KronaOne-Regular',
  },
  button: {
    width: 281,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F20000',
    borderRadius: 10,
    elevation: 10,
  },
  text1: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 30,
    fontFamily: 'KronaOne-Regular',
    marginTop: 90
  },
  text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'KronaOne-Regular',
  },
  text2: {
    textAlign: 'left',
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'KronaOne-Regular',
  },
  text3: {
    marginRight: 150,
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'KronaOne-Regular',
  },
  wrapperInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  grouprow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
export default styles;
