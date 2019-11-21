import React, { Component } from "react";
import { fetchBoards } from '../APIs/boards';
import BoardCreate from './board/BoardCreate';
import BoardCard from './board/BoardCard';
import BoardIndex from './board/BoardIndex';
import { Route, Switch } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <BoardIndex />
      </div>
    );
  }
}