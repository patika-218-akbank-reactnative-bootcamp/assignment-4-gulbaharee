import axios from 'axios';
import React from 'react';
import { View,Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const MoviePage = ()=>{
    const movies = useSelector((state)=>state.movies.movieList);
    const dispatch = useDispatch();

    const getMovies=()=>{
        axios.get('').then(
            
        )
    }


    return(
        <View>
            <Text>MoviePage</Text>
        </View>
    );
}

export default MoviePage;