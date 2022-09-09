import React from 'react';
import { View,Text } from 'react-native';
import { useSelector} from 'react-redux';


const MovieDetail = ({route})=>{
    const {id} = route.params;
    const movies = useSelector(state => state.movies.movieList);
    
    return(
        <View>
            <Text>{id}</Text>
        </View>
    );
}

export default MovieDetail;