import {createReducer} from "../utils/Utils";
import MovieActionTypes from "../actions/actionTypes"


const initialState = {
    "movielist": null,
    "theaterlist":null,
    "curSelectedMovieObj":null,
    "bookingStatus":null
}

let MovieReducer = createReducer(initialState,{
    [MovieActionTypes.SET_MOVIE_LIST_DATA]:(state,payload)=>{
        return {...state,...payload};
    },
    [MovieActionTypes.SET_CURRENT_BOOKING_MOVIE]:(state,payload)=>{
        return {...state,...payload};
    },
    [MovieActionTypes.SET_BOOKING_STATUS]:(state,payload)=>{
        return {...state,...payload};
    }
});

export default MovieReducer;