import React, {useState, useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {setUsers} from '../store/userSlice';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const screen_Height = Dimensions.get('screen').height;
const screen_Width = Dimensions.get('screen').width;

const SignIn = () => {
  const {navigate} = useNavigation();
  const users = useSelector((state)=>state.users.registeredUsers);
  const dispatch = useDispatch();



  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get('http://localhost:3000/users').then(response => {
      dispatch(setUsers({users:response.data}));
    });
  };

  const handleSubmit = e => {
      
    const userIndex = users.findIndex(user => user.username === usernameInput);
    if (users[userIndex].password == passwordInput) {
      navigate('Home');
    } else {
      console.log('error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign In</Text>
      <View style={styles.signIn}>
        <TextInput
          style={styles.inputs}
          placeholder="username"
          onChangeText={text => (usernameInput = text)}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputs}
          placeholder="password"
          onChangeText={text => (passwordInput = text)}
          autoCapitalize="none"
        />
        {/* <Pressable><Text style={styles.button}>Sign In</Text></Pressable> */}
        <Button title="Sign In" onPress={handleSubmit} />
        <Button
          title="Do not have an account?"
          onPress={() => navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    height: screen_Height,
  },
  headerText: {
    fontSize: 40,
    paddingTop: 150,
    textAlign: 'center',
  },
  inputs: {
    marginTop: 20,
    borderColor: 'grey',
    borderWidth: 1,
    height: 50,
    borderRadius: 5,
    width: (screen_Width / 3) * 2,
    textAlign: 'center',
  },
  signIn: {
    marginTop: 50,
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    borderColor: 'grey',
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    width: (screen_Width / 3) * 2,
  },
});
