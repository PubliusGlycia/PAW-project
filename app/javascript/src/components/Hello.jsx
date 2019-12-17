import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'

export default class Hello extends Component {
  render() {
    const HelloStyle = {
      position: 'fixed',
      width: '100%',
    };

    return (
      <div style={HelloStyle}>
        <h1>Hello!</h1>
      </div>
    );
  }
}