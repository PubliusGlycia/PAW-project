import React, { Component } from "react";
import { fetchBoards } from './APIs/boards';
import BoardCreate from './components/BoardCreate';
import BoardDelete from './components/BoardDelete';
import BoardShow from './components/BoardShow';
import { Button } from 'reactstrap';

export default class App extends Component {
	constructor(props) {
    super(props);
		this.state = {
      boards: [],
      toggle: false
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
    console.log("debug", this.state.boards)
    const boards = this.state.boards;
    this.setState({
      boards: boards.map(board =>
        board.id === updatedBoard.id ? updatedBoard : board
      ),
    });
  };

  render() {

    return (
    	<div className="container mt-5">

        <h1>Choose your Board</h1>

    		<div>

    			{this.state.boards.map((board, i) => (
			     	<div key={i}>

              <BoardShow 
                board={board}
                updateBoard={this.updateBoard}
              />

              <BoardDelete 
                board_id={board.id}
                removeBoardFromList={this.removeBoardFromList}
              />
			       </div>
			    ))}

				</div>

        <BoardCreate onSubmit={this.addBoardToList} />

			</div>
		);
  }
}