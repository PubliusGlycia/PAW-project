import React, { Component } from 'react';
import ListShow from './ListShow';
import ListCreate from './ListCreate';
import { fetchLists } from '../../APIs/lists';
import { getBoard } from '../../APIs/boards';
import { Row } from 'reactstrap';

export default class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      lists: [],
    };
    this.addListToList = this.addListToList.bind(this);
    this.updateList = this.updateList.bind(this);
  };

  addListToList(newList) {
    this.setState({
       lists : [newList, ...this.state.lists],
    }); 
  }

  componentDidMount = async () => {
    await this.refreshBoard();
    await this.refreshLists();
  }

  refreshLists = async () => {
    const lists = await fetchLists(this.props.board_id);
    this.setState({
      lists
    }); 
  }

  refreshBoard = async () => {
    const board = await getBoard(this.props.board_id);
    this.setState({
      board
    }); 
  }

  updateList(updatedList) {
    this.setState({
      lists: this.state.lists.map(list =>
        list.id === updatedList.id ? updatedList : list
      ),
    });
  }

  deleteList = (listToDelete) => {
    this.setState({
      lists: this.state.lists.filter(list => listToDelete.id !== list.id)
    });
  }

	render() {

		const listColomnStyle = {
			minWidth: '18em',
		}

    const board = this.state.board

	  return (
	  	<div className="m-2">
		  	<Row>
	  			{this.state.lists.map((list, i) => (
			     	<div className="m-2" style={listColomnStyle} key={i}>
	            <ListShow 
                list={list}
                board={board}
                updateList={this.updateList}
                deleteList={this.deleteList}
              />
			      </div>
			    ))}

		     	<div className="m-2" style={listColomnStyle}>
            <ListCreate 
            	board={board}
            	onSubmit={this.addListToList}
            />
		      </div>

			  </Row>
		  </div>
	  )
	}
}