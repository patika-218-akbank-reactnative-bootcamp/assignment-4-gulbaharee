import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoviePage from '../pages/MoviePage';
import Search from '../pages/Search';
import Setting from '../pages/Setting';
import {Button} from 'react-native';

const Tabs = createBottomTabNavigator();

const BottomNavigator = () => {
  const {navigate} = useNavigation();
  const handleLogOut = () => {
    navigate('SignIn');
  };

  return (
    <Tabs.Navigator>
      <Tabs.Screen name="MoviePage" options={{headerShown:false}} component={MoviePage} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen
        name="Setting"
        options={{
          headerRight: () => <Button title="Log Out" onPress={handleLogOut} />,
        }}
        component={Setting}
      />
    </Tabs.Navigator>
  );
};

export default BottomNavigator;
