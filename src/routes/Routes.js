import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import history from '../helpers/history.js';
import MovieContainer from '../containers/MovieContainer';
import BookScreenContainer from "../containers/BookScreenContainer";

export const Routes = () => {
         return <Router history={history} >
          <Switch>
            <Route exact path="/" component={MovieContainer} />
            <Route path="/bookmovie" component={BookScreenContainer}/>
          </Switch>
        </Router>
}