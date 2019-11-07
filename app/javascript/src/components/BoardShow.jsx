import React, { Component } from 'react';
import { Button } from 'reactstrap';
import BoardEdit from './BoardEdit';

export default class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  };

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };

  printBoardTitle(boardTitle) {
    if (this.state.edit === false) {
      return (
        <div>
          { boardTitle }
        </div>
      );
    }
  };

  render () {
    const board = this.props.board
    return (
      <div>
        { this.printBoardTitle(board.title) }
        <BoardEdit 
          toggleEdit={this.toggleEdit}
          edit={this.state.edit}
          board={board}
          updateBoard={this.props.updateBoard}
        />
      </div>
    )
  }
}