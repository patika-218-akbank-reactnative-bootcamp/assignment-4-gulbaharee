import axios from 'axios';
import React from 'react';
import { View,Text ,StyleSheet,Dimensions} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MoviesHeader from '../components/homePageHeader';
import MovieBox from '../components/movieBox';

const screen_Height = Dimensions.get('screen').height;
const MoviePage = ()=>{
    const movies = useSelector((state)=>state.movies.movieList);
    const dispatch = useDispatch();

    const getMovies=()=>{
        axios.get('').then(
            
        )
    }


    return(
        <View style={styles.container}>
            <MoviesHeader/>
            <MovieBox/>
        </View>
    );
}

export default MoviePage;

const styles=StyleSheet.create({
    container:{
        height:screen_Height,
    }
})