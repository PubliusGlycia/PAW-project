import React, { Component } from "react";
import { fetchBoards } from './APIs/boards';

export default class App extends Component {
	state = {
  	boards: []
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

  render() {
    return (
    	<div className="">
    		<div className="">
    			Hello from React :) lol zz
    			{this.state.boards.map((board, i) => (
			     	<div key={i}>
			       	{board.title}
			       </div>
			    ))}
				</div>
			</div>
		);
  }
}