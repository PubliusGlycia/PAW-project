import React, { Component } from 'react';
import { updateCard } from '../../APIs/cards';
import { Button } from 'reactstrap';

export default class CardEdit extends React.Component {

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  handleChangeDescription = (e) => {
    this.setState({
      description: e.target.value
    });
  }

  handleChangeGreen = (e) => {
    this.setState({
      green: e.target.value
    });
  }

  cardDescription = () => {
			if(this.props.card.description === undefined || this.props.card.description === null){
				return ''
			}else{
			  return (
				  this.props.card.description
			  )
      }
  }
  cardGreen = () => {
    if(this.props.card.green === undefined || this.props.card.green === null){
      return ''
    }else{
      return (
        this.props.card.green
      )
    }
  }
	
  

  handleSubmit = async e =>{
    const {board_id, list_id, card} = this.props
    e.preventDefault();
    const updatedCard = await updateCard(board_id, list_id, card.id, this.state.title, this.state.description, this.state.green);
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
                placeholder='Title'
                onChange={this.handleChangeTitle}
              />
              </label>
              <label htmlFor="Description">
              <input type="text" 
                name="description" 
                id="description" 
                className="form-control"
                placeholder='Description'
                onChange={this.handleChangeDescription}
              />
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
	  	<div>
		  	{this.renderEditForm()}
		  </div>
	  )
	}
}