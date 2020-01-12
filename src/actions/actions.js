import MovieActionTypes from "./actionTypes"
import TheaterData from "../JsonData/TheaterData";
import {getRequest} from "../utils/Utils";
import axios from 'axios';

export const setMovieListData = ()=>{
   return (dispatch)=>{
       let movieTitle = ["avengers","Race","avatar"];
       let MapData = new Map(),movieList,getRequestList;

       getRequestList = movieTitle.map(data => getRequest(data));
       axios.all(getRequestList).then(axios.spread((...response)=>{

            movieList = response.map(responseobj => responseobj.data);
            TheaterData.map((data)=>{ MapData.set(data.id,data.theaterlist) })
  
         dispatch({
           type:MovieActionTypes.SET_MOVIE_LIST_DATA,
           payload:{
              movielist:movieList,
              theaterlist:MapData
           } 
         })
       })).catch(error => {
           console.log("Action setMovieListData Error:::",error);
       })
   }
}

export const setCurrentBookingMovie = (id) =>{
    return (dispatch,getState)=>{
        let curState = getState();
        let movieobj = curState.movielist.find(data => data.imdbID === id);

        dispatch({
            type:MovieActionTypes.SET_CURRENT_BOOKING_MOVIE,
            payload:{
             curSelectedMovieObj:movieobj
            }
        })
    }
}

export const setBookingStatus = (id) =>{
    return (dispatch)=>{
        dispatch({
            type:MovieActionTypes.SET_BOOKING_STATUS,
            bookingStatus:"Booked Successfully"
        })
    }
}