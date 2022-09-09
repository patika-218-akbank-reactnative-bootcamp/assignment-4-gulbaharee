import React from 'react';
import {View, StyleSheet, Text, Pressable, Dimensions,TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const screen_Width = Dimensions.get('screen').width;

const MovieBox = ({movieName, description, rate,id}) => {
  const {navigate} = useNavigation();

  const goMovieDetail = (id) => {
    navigate('MovieDetail', { id ,title:movieName})
}
  return (
    <Pressable onPress={()=>{goMovieDetail(id)}}>
      <View style={styles.container}>
        <View style={styles.image}></View>
        <View style={styles.contents}>
          <Text
            style={styles.movieName}
            >
            {movieName}
          </Text>
          <Text style={styles.desc} numberOfLines={2}>
            {description}
          </Text>
          <Text style={styles.rate}>{rate}/10</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MovieBox;

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: 'rgb(220,220,220)',
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    borderRadius: 10,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
    backgroundColor: 'black',
    margin: 20,
  },
  contents: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 15,
  },
  movieName: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 5,
    fontSize: 13,
    overflow: 'hidden',
  },
  rate: {
    marginTop: 5,
    fontSize: 15,
  },
});
