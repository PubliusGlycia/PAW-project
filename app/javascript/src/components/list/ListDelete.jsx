import React, { Component } from 'react';
import { removeList } from '../../APIs/lists';
import { Button } from 'reactstrap';

export default class ListDelete extends React.Component {

  handleClick = async () => {
    const { board, list } = this.props;
    const listToDelete = await removeList(board.id, list.id);
    this.props.deleteList(listToDelete); 
  };

  render () {
    return (
      <Button 
        color="danger" 
	      onClick={e =>
	        window.confirm("Are you sure you wish to delete this list?") &&
	        this.handleClick(e)
	    	}
        className="mt-2"
      >
        Delete
      </Button>
    );
  }
}