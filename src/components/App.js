import React from 'react';
import { Provider } from 'react-redux';
import {Routes} from "../routes/Routes";
import store from '../redux/CreateStore';
import '../App.css';

export default class App extends React.Component{

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>BookMyShow</h1>
        </header>
        <Provider store={store}>
        <Routes/>
    </Provider>
      </div>
    );
  }
}
