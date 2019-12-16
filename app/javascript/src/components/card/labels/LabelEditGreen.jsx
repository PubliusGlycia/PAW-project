import React, { Component } from 'react';
import { updateCard } from '../../../APIs/cards';
import { Button } from 'reactstrap';

export default class LabelEditGreen extends React.Component {

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
    this.props.toggleEdit1();
  }

  renderEditForm = () => {
  	if (this.props.editable1 === true ) {
	    return (
	      <div className="d-flex">
	      	<div>
	      		<form 
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="Green">
              <input type="text" 
                name="green" 
                id="green" 
                className="form-control"
                placeholder='Green'
                onChange={this.handleChangeGreen}
              />
              </label>
              <input type="submit"
                value="Update"
                className="btn btn-success"
                required
              />
              <Button color="warning" onClick={this.props.toggleEdit1}>
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
				  	<button className="btn btn-info" onClick={this.props.toggleEdit1}>
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