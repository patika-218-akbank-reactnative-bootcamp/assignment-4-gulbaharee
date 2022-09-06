import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Setting from '../pages/Setting';

const Tabs = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Search" component={Search}/>
        <Tabs.Screen name="Setting" component={Setting}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigator;
