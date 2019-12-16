import React, { Component } from 'react';
import { updateCard } from '../../../APIs/cards';
import { Button } from 'reactstrap';

export default class LabelEditRed extends React.Component {

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

  handleChangeRed = (e) => {
    this.setState({
      red: e.target.value
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
    
    cardRed = () => {
        if(this.props.card.red === undefined || this.props.card.red === null){
            return ''
        }else{
          return (
              this.props.card.red
          )
        }
    }
	
  

  handleSubmit = async e =>{
    const {board_id, list_id, card} = this.props
    e.preventDefault();
    const updatedCard = await updateCard(board_id, list_id, card.id, this.state.title, this.state.description, this.state.green, this.state.blue, this.state.yellow, this.state.red);
    this.props.updateCard(updatedCard);
    this.props.toggleEdit4();
  }

  renderEditForm = () => {
  	if (this.props.editable4 === true ) {
	    return (
	      <div className="d-flex">
	      	<div>
	      		<form 
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="Red">
              <input type="text" 
                name="red" 
                id="red" 
                className="form-control"
                placeholder='Red'
                onChange={this.handleChangeRed}
              />
              </label>
              <input type="submit"
                value="Update"
                className="btn btn-success"
                required
              />
              <Button color="warning" onClick={this.props.toggleEdit4}>
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
				  	<button className="btn btn-info" onClick={this.props.toggleEdit4}>
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