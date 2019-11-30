import React, { Component } from 'react';
import ListShow from './ListShow';
import ListCreate from './ListCreate';
import { fetchLists } from '../../APIs/lists';
import { Row } from 'reactstrap';

export default class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    }
  }

  addListToList = (newList) => {
    this.setState({
       lists : [newList, ...this.state.lists],
    })
  }

  componentDidMount = async () => {
    await this.refreshLists();
  }

  refreshLists = async () => {
    const lists = await fetchLists(this.props.board_id);
    this.setState({
      lists
    }); 
  }
 
  updateList = (updatedList) => {
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

	  return (
	  	<div className="m-2">
		  	<Row>
	  			{this.state.lists.map((list, i) => (
			     	<div className="m-2" style={listColomnStyle} key={i}>
	            <ListShow 
                list={list}
                board_id={this.props.board_id}
                updateList={this.updateList}
                deleteList={this.deleteList}
              />
			      </div>
			    ))}

		     	<div className="m-2" style={listColomnStyle}>
            <ListCreate 
              board_id={this.props.board_id}
            	onSubmit={this.addListToList}
            />
		      </div>
			  </Row>
		  </div>
	  )
	}
}