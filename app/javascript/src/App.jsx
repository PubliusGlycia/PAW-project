import React, { Component } from "react";
import Home from './components/Home';
import Hello from './components/Hello';
import BoardIndex from './components/board/BoardIndex';
import BoardShow from './components/board/BoardShow';
import Nav from './components/Nav';
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>        
        <Nav />
        <div style={{position: 'relative', top: '80px'}}>
          <Switch>
            <Route exact path="/" component={Hello} />
            <Route exact path="/pages" component={Home} />
            <Route exact path="/boards" component={BoardIndex} />
            <Route path="/boards/:id" component={BoardShow} />
          </Switch>
        </div>
      </div>
    );
  }
}