import React, {useState,useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setGenres} from '../store/genresSlice';
import axios from 'axios';

const screen_Width = Dimensions.get('screen').width;

const MovieDetail = ({route}) => {
  const {id} = route.params;
  const movies = useSelector(state => state.movies.movieList);
  const genres = useSelector(state => state.genres.genresList);
  const dispatch = useDispatch();
  const userIndex = movies.results.findIndex(movie => movie.id === id);
  
  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = () => {
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=9313b113d2218d771f47c0f7fd2af4bb').then(response => {
      dispatch(setGenres({genres: response.data}));
      
    });
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.image}></View>
      <View style={styles.header}>
        <Text style={styles.title}>{movies.results[userIndex].title}</Text>
        <Text style={styles.rate}>
          {movies.results[userIndex].vote_average}/10
        </Text>
      </View>
      <Text style={styles.desc}>{movies.results[userIndex].overview}</Text>
      {/* {
          (movies.results[userIndex].genre_ids).map(genre=>
            <Text>{genres[genres.findIndex(item => item.id === genre)].name}</Text>
            )
      } */}
      <Text style={styles.desc}>{movies.results[userIndex].overview}</Text>
    </View>
  );
};

export default MovieDetail;
const styles = StyleSheet.create({
  container: {
    margin: 40,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 10,
    backgroundColor: 'black',
    marginLeft: screen_Width / 2 - 140,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 40,
    marginTop: 20,
  },
  desc: {
    marginTop: 10,
  },
  rate: {
    marginTop: 30,
    fontSize: 30,
  },
});
