import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import MovieDetail from '../pages/MovieDetail';
import Theme from '../pages/Theme';
import Setting from '../pages/Setting';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" options={{headerShown:false}} component={SignIn} />
        <Stack.Screen name="SignUp" options={{headerShown:false}}  component={SignUp} />
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
        <Stack.Screen name="Theme" component={Theme} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
