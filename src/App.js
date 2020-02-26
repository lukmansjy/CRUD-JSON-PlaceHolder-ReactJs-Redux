import React, { Component } from 'react';
import './App.css';
import Users from './page/Users';
import Posts from './page/Posts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Post from './page/Post';
import Home from './page/Home';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
  
        <Switch>
          <Route path='/posts'>
            <Posts/>
          </Route>
          <Route path='/post/:id'>
            <Post/>
          </Route>
          <Route path='/users'>
            <Users/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  
}

export default App;
