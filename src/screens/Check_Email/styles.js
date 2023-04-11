import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181616',
    height: height,
    width: width,
  },
  content:{
    flex: 0.3,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content1:{
    flex: 0.4,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content2:{
    flex: 0.3,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 75,
  },
  input: {
    backgroundColor: '#1E1E1E',
    width: 370,
    height: 52,
    borderRadius: 8,
    borderColor: '#00FF19',
    borderWidth: 2,
    paddingHorizontal: 8,
    fontSize: 12,
    fontFamily: 'KronaOne-Regular',
    color: '#fff',
    paddingHorizontal: 8
  },
  button: {
    width: 281,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 10,
  },
  text: {
    textAlign: 'center',
    color: '#181616',
    fontSize: 20,
    fontFamily: 'KronaOne-Regular'
  },
  text2: {
    textAlign: 'left',
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'KronaOne-Regular'
  },
  text3: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 10,
    fontFamily: 'KronaOne-Regular',
    padding: 20
  }
});
export default styles;
