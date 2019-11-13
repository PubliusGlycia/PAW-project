import React, { Component } from "react";
import { fetchBoards } from '../../APIs/boards';
import BoardCreate from './BoardCreate';
import BoardCard from './BoardCard';
import { Row } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class BoardIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
    };
    this.addBoardToList = this.addBoardToList.bind(this);
    this.removeBoardFromList = this.removeBoardFromList.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
  };

  addBoardToList(newBoard) {
    this.setState({
       boards : [newBoard, ...this.state.boards],
    }); 
  };

  refreshBoards = async () => {
    const boards = await fetchBoards();
    this.setState({
      boards: boards,
    });
  };

  componentDidMount = async () => {
    await this.refreshBoards();
  };

  removeBoardFromList( boardToRemove ) {
    this.setState({
      boards: this.state.boards.filter(board => boardToRemove.id !== board.id)
    });
  };

  updateBoard(updatedBoard) {
    const boards = this.state.boards;
    this.setState({
      boards: boards.map(board =>
        board.id === updatedBoard.id ? updatedBoard : board
      ),
    });
  };

  render() {

    return (
      	<div className="container">

        <BoardCreate onSubmit={this.addBoardToList} />

      		<div className="mt-5 mx-auto">

            <Row className="d-flex justify-content-center">
        			{this.state.boards.map((board, i) => (
    			     	<div className="w-25" key={i}>
                  <BoardCard 
                    board={board}
                    updateBoard={this.updateBoard}
                    removeBoardFromList={this.removeBoardFromList}
                  />
    			       </div>
    			    ))}
            </Row>

  				</div>
  			</div>
		);
  }
}