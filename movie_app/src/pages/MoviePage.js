import axios from 'axios';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MoviesHeader from '../components/homePageHeader';
import MovieBox from '../components/movieBox';
import {setMovies} from '../store/movieSlice';
const screen_Height = Dimensions.get('screen').height;

const MoviePage = () => {
  const movies = useSelector(state => state.movies.movieList);
  const filter = useSelector(state=>state.filter.chosenFilter);
  const theme = useSelector(state => state.theme.activeTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    getMovies(filter);
  }, []);

  const getMovies = (key) => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/'+key+'?api_key=9313b113d2218d771f47c0f7fd2af4bb'
      )
      .then(response => {
        dispatch(setMovies({movies: response.data}));
      });
  };


  const renderMovies = ({item}) => {
    return (
        <MovieBox
          movieName={item.title}
          description={item.overview}
          rate={item.vote_average}
          id={item.id}
        />
    );
  };

  return (
    <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
      <MoviesHeader />
      <FlatList data={movies.results} renderItem={renderMovies} />
    </View>
  );
};

export default MoviePage;

const styles = StyleSheet.create({
  container: {
    height: screen_Height,
  },
});
