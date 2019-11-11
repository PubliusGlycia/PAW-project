import React, { Component } from "react";
import Home from './components/Home';
import BoardIndex from './components/BoardIndex';
import BoardShow from './components/BoardShow'
import Nav from './components/Nav'
import { Route, Switch } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/boards" component={BoardIndex} />
          <Route exact path="/boards/:id" component={BoardShow} />
        </Switch>
      </div>
    );
  }
}