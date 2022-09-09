import React from 'react';
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
import IconIonicons from 'react-native-vector-icons/Ionicons';

const screen_Height = Dimensions.get('screen').height;
const screen_Width = Dimensions.get('screen').width;
const UserEdit = () => {
  const {goBack} = useNavigation();

  return (
    <View>
      <View style={styles.header}>
        <IconIonicons
          name="chevron-back-sharp"
          style={{marginTop: 60, marginLeft: 10}}
          size={25}
          onPress={() => goBack('Setting')}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>username</Text>
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

          <Button title="Save" />
        </View>
      </View>
    </View>
  );
};

export default UserEdit;
const styles = StyleSheet.create({
  container: {
    height: screen_Height,
  },
  header: {
    height: 100,
    borderBottomWidth: 0.2,
    display: 'flex',
    flexDirection: 'row',
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
