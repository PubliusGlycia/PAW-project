import React, { Component } from 'react';
import { removeComment } from '../../APIs/comment';
import { Button } from 'reactstrap';

export default class CommentDelete extends React.Component {

  handleClick = async () => {
    const { board_id, list_id, card_id, comment } = this.props;
    const cardToDelete = await removeComment(board_id, list_id, card_id, comment.id);
  };

  render () {
    return (
      <Button 
        color="danger" 
	      onClick={e =>
	        window.confirm("Are you sure you wish to delete this comment?") &&
	        this.handleClick(e)
	    	}
        className="ml-2"
      >
        Delete
      </Button>
    );
  }
}