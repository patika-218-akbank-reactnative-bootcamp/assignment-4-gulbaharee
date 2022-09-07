import React, {useState, useEffect} from 'react';
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

const SignUp = () => {
  const {navigate} = useNavigation();

  const [users, setUser] = useState('');

  
  const postUsers = () => {
    axios
      .post('http://localhost:3000/users', {
        email: users.emailInput,
        usernrame: usernameInput,
        password: passwordInput,
      })
      .then(response => {
        console.log(response.data);
      });
  };

  const handleSubmit = e => {
    if (passwordCheckInput === passwordInput) {
      setUser(
        {
          emailInput,
          usernameInput,
          passwordInput,
        },
        [],
      );
    }else{
        console.log('error');
    }
    useEffect(() => {
        postUsers();
      }, []);
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign Up</Text>
      <View style={styles.signIn}>
        <TextInput
          style={styles.inputs}
          placeholder="email"
          onChangeText={text => (emailInput = text)}
          autoCapitalize="none"
        />
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
        <TextInput
          style={styles.inputs}
          placeholder="password (again)"
          onChangeText={text => (passwordCheckInput = text)}
          autoCapitalize="none"
        />
        {/* <Pressable><Text style={styles.button}>Sign In</Text></Pressable> */}
        <Button title="Sign Up" onPress={handleSubmit} />
        <Button
          title="Already have an account?"
          onPress={() => navigate('SignIn')}
        />
      </View>
    </View>
  );
};

export default SignUp;

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
