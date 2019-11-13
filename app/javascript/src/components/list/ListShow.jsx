import React, { Component } from 'react';
import ListEdit from './ListEdit';
import ListDelete from './ListDelete';

export default class ListShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      editable: false,
    };
  }

  listTitle = () => {
  	const editable = this.state.editable;
  	if (editable === false ) {
  		return (
				this.props.list.title
			)
  	}
  }

  toggleEdit = () => {
    this.setState({
      editable: !this.state.editable,
    });
  };

	render() {

    const listStyle = {
      backgroundColor: '#dfe1e6',
      borderRadius: '3px'
    };

    const list = this.props.list;
    const board = this.props.board;

	  return (
	  	<div className="col-12 p-3" style={listStyle}>
	  		<div className="d-flex justify-content-between">
		  		<div>
	      		{this.listTitle()}
	      	</div>
	      	<div>
	      		<ListEdit 
	      			board={board}
	      			list={list} 
	      			editable={this.state.editable}
	      			toggleEdit={this.toggleEdit}
              updateList={this.props.updateList}
	      		/>
	      		<ListDelete list={list} />
	      	</div>
	      </div>
		  </div>
	  )
	}
}