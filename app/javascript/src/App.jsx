import React, { Component } from "react";
import { fetchBoards } from './APIs/boards';
import BoardCreate from './components/BoardCreate';

export default class App extends Component {
	constructor(props) {
		super(props);
			this.state = {
			  boards: []
			};
		this.addBoardToList = this.addBoardToList.bind(this);
	};
	
	addBoardToList(newBoard) {
		this.setState({
		   boards : [newBoard, ...this.state.boards],
		}); 
	  }
	
  refreshBoards = async () => {
    const boards = await fetchBoards();
    this.setState({
      boards: boards,
    });
  };

  componentDidMount = async () => {
    await this.refreshBoards();
  };

  render() {
    return (
    	<div className="">
    		<div className="">
    			Choose Board
    			{this.state.boards.map((board, i) => (
			     	<div key={i}>
			       	{board.title}
			       </div>
			    ))}
				</div>
				<div>
					<BoardCreate onSubmit={this.addBoardToList} />
				</div>
			</div>
		);
  }
}