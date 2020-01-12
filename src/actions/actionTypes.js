import { createConstants } from '../utils/Utils';

const MovieActionTypes = createConstants(
    "SET_MOVIE_LIST_DATA",
    "SET_CURRENT_BOOKING_MOVIE",
    "SET_BOOKING_STATUS"
);

export default MovieActionTypes;