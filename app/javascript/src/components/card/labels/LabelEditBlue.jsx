import React, { Component } from 'react';
import { updateCard } from '../../../APIs/cards';
import { Button } from 'reactstrap';

export default class LabelEditBlue extends React.Component {

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

  handleChangeBlue = (e) => {
    this.setState({
      blue: e.target.value
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
    
    cardBlue = () => {
        if(this.props.card.blue === undefined || this.props.card.blue === null){
            return ''
        }else{
          return (
              this.props.card.blue
          )
        }
    }
	
  

  handleSubmit = async e =>{
    const {board_id, list_id, card} = this.props
    e.preventDefault();
    const updatedCard = await updateCard(board_id, list_id, card.id, this.state.title, this.state.description, this.state.green, this.state.blue, this.state.yellow, this.state.red);
    this.props.updateCard(updatedCard);
    this.props.toggleEdit2();
  }

  renderEditForm = () => {
  	if (this.props.editable2 === true ) {
	    return (
	      <div className="d-flex">
	      	<div>
	      		<form 
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="Blue">
              <input type="text" 
                name="blue" 
                id="blue" 
                className="form-control"
                placeholder='Blue'
                onChange={this.handleChangeBlue}
              />
              </label>
              <input type="submit"
                value="Update"
                className="btn btn-success"
                required
              />
              <Button color="warning" onClick={this.props.toggleEdit2}>
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
				  	<button className="btn btn-info" onClick={this.props.toggleEdit2}>
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