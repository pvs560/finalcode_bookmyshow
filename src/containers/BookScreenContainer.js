import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MovieActions from "../actions/actions";
import BookScreenComponent from "../components/BookScreenComponent";

const mapStateToProps = (state)=>({
    curSelectedMovie: state.curSelectedMovieObj,
    theaterlist:state.theaterlist
})

const mapDispatchToProps = (dispatch)=>({
movieActions: bindActionCreators(MovieActions, dispatch)
})

const BookScreenContainer = connect(mapStateToProps,mapDispatchToProps)(BookScreenComponent);

export default BookScreenContainer;
