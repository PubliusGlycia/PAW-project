import React, { Component } from "react";
import { fetchBoards } from './APIs/boards';
import BoardCreate from './components/BoardCreate';
import BoardShow from './components/BoardShow';
import { Button, Row, Navbar, NavItem, NavbarBrand, Collapse, Nav } from 'reactstrap';

export default class App extends Component {
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
      <div>
        <Navbar color="light" light expand="md">
          <div className="container">
            <NavbarBrand href="/">Trello clone</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <BoardCreate onSubmit={this.addBoardToList} />
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>

      	<div className="container mt-5">

      		<div className="mt-5 mx-auto">
            <Row className="d-flex justify-content-center">
        			{this.state.boards.map((board, i) => (
    			     	<div key={i}>

                  <BoardShow 
                    board={board}
                    updateBoard={this.updateBoard}
                    removeBoardFromList={this.removeBoardFromList}
                  />

    			       </div>
    			    ))}
            </Row>
  				</div>
  			</div>
      </div>
		);
  }
}