import axios from 'axios';
import React, {useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  FlatList,
  Button,
} from 'react-native';
import MovieBox from '../components/movieBox';
import {useDispatch, useSelector} from 'react-redux';
import {setSearcList} from '../store/searchSlice';
const screen_Width = Dimensions.get('screen').width;

const Search = () => {
  const moviesSearch = useSelector(state => state.moviesSearch.searchList);
  const dispatch = useDispatch();

  let queryKey;
  // useEffect(() => {
  //     getMovies();
  //   }, []);

  const getMovies = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/search/movie?api_key=9313b113d2218d771f47c0f7fd2af4bb&query=' +
          queryKey,
      )
      .then(response => {
        dispatch(setSearcList({moviesSearch: response.data}));
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
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchbar}
          placeholder="Search"
          onChangeText={text => (queryKey = text)}
        />
        <Button title="Search" onPress={() => getMovies()} />
      </View>
      <View>
        <FlatList data={moviesSearch.results} renderItem={renderMovies} />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {},
  header: {
    height: 70,
    marginTop: 100,
    borderBottomWidth: 0.2,
    display: 'flex',
    flexDirection: 'row',
  },
  searchbar: {
    width: (screen_Width / 3) * 2,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    marginLeft: 30,
  },
});
