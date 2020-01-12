import history from "../helpers/history";
import axios from 'axios';

export const createReducer = (initialState, reducerMap) => {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];
        return reducer
            ? reducer(state, action.payload)
            : state;
    };
}

export const createConstants = (...constants) => {
    let reducedConst = constants.reduce((obj, constant) => {
        var newObject = {
            ...obj,
            [constant]: constant.toString()
        }
        return newObject;
    }, {});
    const freezedConst = Object.freeze(reducedConst);
    return freezedConst;
}

export const replaceHistory = (newState) => {
    history.replace(newState);
  }
  
export const pushHistory = (newState) => {
    history.push(newState);
  }

  export const getRequest = (param) => {
      return axios.get(`https://www.omdbapi.com/?t=${param}&apikey=ffdb8d01`);
  }
