import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#404040',
    height: height,
    width: width
  },
  contentImage:{
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
    flex: 0.4,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '60%',
    marginTop: '20%'
  },
  arrow: {
    position: 'absolute',
    top: 20,
    left: 11,
  },
  input: {
    width: 380,
    height: 52,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 2,
    paddingHorizontal: 8,
    fontSize: 12,
    fontFamily: 'KronaOne-Regular',
    color: '#fff',
   marginVertical: '1%'
  },
  buttonInactive: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 10,
  },
  buttonActive: {
    width: '20%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
    borderRadius: 10,
    elevation: 10,
  },
  textButton: {
    textAlign: 'center',
    color: '#181616',
    fontSize: 20,
    fontFamily: 'KronaOne-Regular',
  },
  textPassword: {
    textAlign: 'left',
    color: '#ffffff',
    marginRight: '75%',
    fontSize: 15,
    marginHorizontal: 0,
    fontFamily: 'KronaOne-Regular',
  },
  textRepeat: {
    textAlign: 'left',
    color: '#ffffff',
    marginRight: '40%',
    fontSize: 15,
    marginHorizontal: 0,
    fontFamily: 'KronaOne-Regular',
  },
  textTitle: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'KronaOne-Regular',
    marginVertical: '10%'
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
});
export default styles;
