import React from 'react';
import {View, StyleSheet, Text, Pressable, Dimensions} from 'react-native';

const screen_Width = Dimensions.get('screen').width;

const MoviesHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Pressable style={styles.header}>
          <View style={styles.test}>
            <Text style={styles.buttons}>Lastest</Text>
          </View>
          <View style={styles.test}>
            <Text style={styles.buttons}>Top Rated</Text>
          </View>
          <View style={styles.test}>
            <Text style={styles.buttons}>Popular</Text>
          </View>
          <View style={styles.test}>
            <Text style={styles.buttons}>Upcoming</Text>
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
