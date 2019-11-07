import React, { Component } from "react";
import { fetchBoards } from './APIs/boards';
import BoardCreate from './components/BoardCreate';
import { Button } from 'reactstrap';

export default class App extends Component {
	constructor(props) {
		super(props);
			this.state = {
				boards: [],
				toggle: true
			};
		this.addBoardToList = this.addBoardToList.bind(this);
		this.renderCreateForm = this.renderCreateForm.bind(this);

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

  renderCreateForm = () => {
    if (this.state.toggle === true) {
      return(
        <div>
         <BoardCreate onSubmit={this.addBoardToList} />
        </div>
      );
    }
  };

  render() {
    return (
    	<div className="container">
    		<div className="mt-5">
    			Choose Board
    			{this.state.boards.map((board, i) => (
			     	<div key={i}>
			       	{board.title}
			       </div>
			    ))}
				</div>
					<button onClick={this.toggleForm}> 
					click me
					</button>
				<div>
					{this.renderCreateForm()}
				</div>
				<Button color="primary">hello</Button>
			</div>
		);
  }
}