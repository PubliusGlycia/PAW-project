import React, { Component } from 'react';
import { updateComment } from '../../APIs/comment';
import { Button } from 'reactstrap';

export default class CommentEdit extends React.Component {


  handleChangeComment = (e) => {
    this.setState({
      comment: e.target.value
    });
  }

  CommentText = () => {
			  return (
				  this.props.comment.comment
			  )
  }

  handleSubmit = async e =>{
    const {board_id, list_id, card_id, comment} = this.props
    e.preventDefault();
    const updatedComment = await updateComment(board_id, list_id, card_id, comment.id , 'Autor', this.state.comment, this.state.created_at);
    this.props.toggleEdit();
  }

  renderEditForm = () => {
  	if (this.props.editable === true ) {
	    return (
	      <div className="d-flex" >
          <hr />
	      	<div>
	      		<form 
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="Description">
              <input required="" rows="10" cols="50" 
                  name="comment" id="comment" className="form-control" placeholder={this.props.comment.comment}
                  onChange={this.handleChangeComment}></input>
              </label>
              <input type="submit"
                value="Update"
                className="btn btn-success"
                required
              />
              <Button color="warning" onClick={this.props.toggleEdit}>
			  		    Cancel
			  	    </Button>
            </form>
          </div>
        </div>
	    )
	  } else {
	  	return (
	  		<div>
			  	<div>
				  	<button className="btn btn-info" onClick={this.props.toggleEdit}>
				  		Edit
				  	</button>
				  </div>
	  		</div>
	  	)
	  }
  }

	render() {
	  return (
	  	<div style={{float: 'left'}}>
		  	{this.renderEditForm()}
		  </div>
	  )
	}
}