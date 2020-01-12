import MovieActionTypes from "../../actions/actionTypes";
import MovieReducer from "../MovieReducer";
import MovieList from "../../JsonData/movielist";
import TheaterData from "../../JsonData/TheaterData";

describe('MovieList Reducer',()=>{
   
    test('should return default state',()=>{
        const movieListIntialState = {
             "curSelectedMovieObj": null,
             "movielist": null,
             "theaterlist": null,
             "bookingStatus": null
            };
        const newState = MovieReducer(undefined,{});
        expect(newState).toEqual(movieListIntialState);
    });

    test('should return new State based on the Setmovielist type',()=>{
        const movieListIntialState = {
            "curSelectedMovieObj": null,
            "movielist": MovieList.movielist,
            "theaterlist": TheaterData,
            "bookingStatus": null
           };
         const newState =  MovieReducer(undefined,{
            type:MovieActionTypes.SET_MOVIE_LIST_DATA,
            payload:{
               movielist:MovieList.movielist,
               theaterlist:TheaterData
            }
         });
         expect(newState).toEqual(movieListIntialState); 
    });

})