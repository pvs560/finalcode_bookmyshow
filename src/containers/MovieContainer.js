import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieComponent from '../components/MovieComponent';
import * as MovieActions from "../actions/actions";

const mapStateToProps = (state)=>({
    movielist: state.movielist
})

const mapDispatchToProps = (dispatch)=>({
movieActions: bindActionCreators(MovieActions, dispatch)
})

const MovieContainer = connect(mapStateToProps,mapDispatchToProps)(MovieComponent);

export default MovieContainer;