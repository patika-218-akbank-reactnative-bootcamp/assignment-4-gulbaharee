import React from 'react';
import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {toggleTheme} from '../store/themeSlice';

const screen_Height = Dimensions.get('screen').height;
const screen_Width = Dimensions.get('screen').width;

const Theme = () => {
  const theme = useSelector(state => state.theme.activeTheme);

  const dispatch = useDispatch();

  const handleTheme=()=>
  {
    dispatch(toggleTheme(theme.type));
    
  }
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Pressable style={styles.buttonContainer}>
        <Text style={[styles.button,{borderColor:theme.lineColor},{backgroundColor:theme.secondaryColor}]} onPress={handleTheme}>Light / Dark</Text>
      </Pressable>
    </View>
  );
};

export default Theme;

const styles = StyleSheet.create({
  container: {
    height: screen_Height,
  },
  button:{
      height:60,
      width:screen_Width - 50,
      borderWidth:1,
      borderRadius:5,
      textAlign:'center',
  },
  buttonContainer:{
      margin:25,
  }
});
