import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoviePage from '../pages/MoviePage';
import Search from '../pages/Search';
import Setting from '../pages/Setting';

const Tabs = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="MoviePage" component={MoviePage} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Setting" component={Setting} />
    </Tabs.Navigator>
  );
};

export default BottomNavigator;
