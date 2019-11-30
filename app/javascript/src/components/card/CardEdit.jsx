import React, { Component } from 'react';
import { updateCard } from '../../APIs/cards';

export default class CardEdit extends React.Component {

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = async e =>{
    const {board_id, list_id, card} = this.props
    e.preventDefault();
    const updatedCard = await updateCard(board_id, list_id, card.id, this.state.title);
    this.props.updateCard(updatedCard);
    this.props.toggleEdit();
  }

  renderEditForm = () => {
  	if (this.props.editable === true ) {
	    return (
	      <div className="d-flex">
	      	<div>
	      		<form 
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="Title">
              <input type="text" 
                name="title" 
                id="title" 
                className="form-control"
                placeholder={this.props.card.title}
                onChange={this.handleChangeTitle}
              />
              </label>
              <input type="submit"
                value="Update"
                className="btn btn-success"
                required
              />
            </form>
	      	</div>
      		<button onClick={this.props.toggleEdit}>
			  		Cancel
			  	</button>
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
	  	<div>
		  	{this.renderEditForm()}
		  </div>
	  )
	}
}