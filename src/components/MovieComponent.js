import React from "react";
import Moviecard from "./Moviecard";
import {pushHistory} from "../utils/Utils";
import PropTypes from "prop-types";

export default class MovieComponent extends React.Component {

  constructor(props){
    super(props);
    console.log("movieComponent constructor::",this.props.movielist);
  }


  handleBookNow = (id)=>{
    console.log("book nlow clicked::",id);
    this.props.movieActions.setCurrentBookingMovie(id);
    pushHistory("/bookmovie");
  }

    componentDidMount() {
      this.props.movieActions.setMovieListData();
    }
     

    render(){
      console.log("movieComponent in props::",this.props.movielist);
         if(this.props.movielist != null){  
            return <Moviecard movielist={this.props.movielist} handleBookNow={this.handleBookNow}/>
          }
         else{
            return null;
          }
    }

}

MovieComponent.propTypes = {
  movielist: PropTypes.array,
  movieActions:PropTypes.object.isRequired
};