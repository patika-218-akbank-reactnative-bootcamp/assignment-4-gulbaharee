import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const screen_Height = Dimensions.get('screen').height;
const screen_Width = Dimensions.get('screen').width;

const Setting = () => {
  const {navigate} = useNavigation();
  const theme = useSelector(state => state.theme.activeTheme);

  return (
    <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
      <View style={styles.image}></View>
      <View style={styles.settingButton}>
        <Pressable>
          <Text style={[styles.button,{backgroundColor:theme.secondaryColor}]} onPress={() => navigate('Theme')}>
            Theme
          </Text>
          <Text style={[styles.button,{backgroundColor:theme.secondaryColor}]} onPress={() => navigate('UserEdit')}>
            Setting
          </Text>
          
        </Pressable>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: 'red',
    margin: screen_Width / 2 - 60,
  },
  settingButton: {
    height: 200,
    width: screen_Width - 50,
    alignItems: 'center',
    marginTop: -100,
    marginLeft: 25,
  },
  button: {
    height: 70,
    backgroundColor: 'rgb(224,224,224)',
    marginTop: 20,
    width: 300,
    textAlign: 'center',
    borderColor:'gray',
    borderWidth:1,
    borderRadius:5,
  },
  container:{
    height:screen_Height,
  }
});
