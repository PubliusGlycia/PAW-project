import React, { Component } from 'react';
import { removeCard } from '../../APIs/cards';
import { Button } from 'reactstrap';

export default class CardDelete extends React.Component {

  handleClick = async () => {
    const { board_id, list_id, card } = this.props;
    const cardToDelete = await removeCard(board_id, list_id, card.id);
    this.props.deleteCard(cardToDelete); 
  };

  render () {
    return (
      <Button 
        color="danger" 
	      onClick={e =>
	        window.confirm("Are you sure you wish to delete this card?") &&
	        this.handleClick(e)
	    	}
        className="ml-2"
      >
        Delete
      </Button>
    );
  }
}