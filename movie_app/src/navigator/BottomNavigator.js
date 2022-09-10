import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoviePage from '../pages/MoviePage';
import Search from '../pages/Search';
import Setting from '../pages/Setting';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setLoginUser} from '../store/loginUserSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';

const Tabs = createBottomTabNavigator();

const BottomNavigator = () => {
  const {navigate} = useNavigation();
  const loggedUser = useSelector(state => state.loggedUser.loggedUserInfo);

  const dispatch = useDispatch();

  const handleLogOut = async () => {
    dispatch(setLoginUser({loggedUser: null}));
    console.log(loggedUser);
    await AsyncStorage.removeItem('loggedUser');
  };

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="MoviePage"
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="movie" size={25} />,
          title: 'Movies',
        }}
        component={MoviePage}
      />
      <Tabs.Screen
        name="Search"
        options={{
          headerShown: false,
          title: 'Search',
          tabBarIcon: () => <IconAnt name="search1" size={25} />,
        }}
        component={Search}
      />
      <Tabs.Screen
        name="Setting"
        options={{
          headerRight: () => <Button title="Log Out" onPress={handleLogOut} />,
          tabBarIcon: () => <IconAnt name="setting" size={25} />,
        }}
        component={Setting}
      />
    </Tabs.Navigator>
  );
};

export default BottomNavigator;
