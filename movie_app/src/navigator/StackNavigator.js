import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import MovieDetail from '../pages/MovieDetail';
import Theme from '../pages/Theme';
import Setting from '../pages/Setting';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
        <Stack.Screen name="Theme" component={Theme} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
