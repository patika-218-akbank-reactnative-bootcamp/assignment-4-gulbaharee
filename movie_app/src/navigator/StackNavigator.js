import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import MovieDetail from '../pages/MovieDetail';
import Theme from '../pages/Theme';
import UserEdit from '../pages/UserEdit';
import Home from '../pages/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const loggedUser =useSelector(state=>state.loggedUser.loggedUserInfo);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedUser ? (
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Home}
          />
        ) : (
          <Stack.Screen
            name="SignIn"
            options={{headerShown: false}}
            component={SignIn}
          />
        )}

        <Stack.Screen
          name="SignUp"
          options={{headerShown: false}}
          component={SignUp}
        />
        
        <Stack.Screen
          name="MovieDetail"
          options={({route}) => ({title: route.params.title})}
          component={MovieDetail}
        />
        <Stack.Screen name="Theme" component={Theme} />
        <Stack.Screen
          options={{headerShown: false}}
          name="UserEdit"
          component={UserEdit}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
