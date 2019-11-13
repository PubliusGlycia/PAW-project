import React, { Component } from 'react';
import ListShow from './ListShow';
import ListCreate from './ListCreate';
import { fetchLists } from '../../APIs/lists'
import { Row } from 'reactstrap';

export default class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    await this.refreshLists();
  }

  refreshLists = async () => {
    const lists = await fetchLists(this.props.board.id);
    this.setState({
      lists
    }); 
  }

  updateList(updatedList) {
    this.setState({
      lists: this.state.lists.map(list =>
        list.id === updatedList.id ? updatedList : list
      ),
    });
  };

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
                board={this.props.board}
                updateList={this.updateList}
              />
			      </div>
			    ))}

		     	<div className="m-2" style={listColomnStyle}>
            <ListCreate 
            	board={this.props.board}
            	onSubmit={this.addListToList}
            />
		      </div>

			  </Row>
		  </div>
	  )
	}
}