import React, { Component } from "react";
import { fetchBoards } from '../APIs/boards';
import BoardCreate from './BoardCreate';
import BoardCard from './BoardCard';
import BoardIndex from './BoardIndex';
import { Route, Switch } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
          <BoardIndex />
        </div>
      </div>
    );
  }
}