import React, { Component } from 'react';
import { removeBoard } from '../APIs/boards';
import { Button } from 'reactstrap';

export default class BoardDelete extends React.Component {

  handleClick = async () => {
    const board_id = this.props.board_id
    const boardToRemove = await removeBoard(board_id);
    console.log("yoloy", boardToRemove)
    this.props.removeBoardFromList(boardToRemove); 
  };

  render () {
    return (
      <Button 
        className="ml-3" 
        color="danger" 
        onClick={this.handleClick}
      >
        Delete
      </Button>
    );
  }
}