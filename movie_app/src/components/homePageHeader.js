import React from 'react';
import {View, StyleSheet, Text, Pressable, Dimensions} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {setFilter} from '../store/filterSlice';

const screen_Width = Dimensions.get('screen').width;

const MoviesHeader = () => {
  const filter = useSelector(state=>state.filter.chosenFilter);
  const dispatch =useDispatch();
  console.log(filter);

  const handleFilter=(key)=>{
    dispatch(setFilter({filter:key}));
  }
  return (
    <View style={styles.container}>
      <View>
        <Pressable style={styles.header}>
          <View style={styles.test}>
            <Text style={styles.buttons} onPress={()=>handleFilter('lastest')}>Lastest</Text>
          </View>
          <View style={styles.test}>
            <Text style={styles.buttons} onPress={()=>handleFilter('top_rated')}>Top Rated</Text>
          </View>
          <View style={styles.test}>
            <Text style={styles.buttons} onPress={()=>handleFilter('popular')}>Popular</Text>
          </View>
          <View style={styles.test}>
            <Text style={styles.buttons} onPress={()=>handleFilter('upcoming')}>Upcoming</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default MoviesHeader;

const styles = StyleSheet.create({
  container: {
    height: 150,
    margin: 5,
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 90,
  },
  test: {
    borderRadius: 10,
    backgroundColor: 'rgb(211,211,211)',
    width: screen_Width / 4 - 10,
    height: 40,
  },
  buttons: {
    textAlign: 'center',
    marginTop:10,
  },
});
