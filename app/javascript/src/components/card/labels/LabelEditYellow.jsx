import React, { Component } from 'react';
import { updateCard } from '../../../APIs/cards';
import { Button } from 'reactstrap';

export default class LabelEditYellow extends React.Component {

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

  handleChangeYellow = (e) => {
    this.setState({
      yellow: e.target.value
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
    
    cardYellow = () => {
        if(this.props.card.yellow === undefined || this.props.card.yellow === null){
            return ''
        }else{
          return (
              this.props.card.yellow
          )
        }
    }
	
  

  handleSubmit = async e =>{
    const {board_id, list_id, card} = this.props
    e.preventDefault();
    const updatedCard = await updateCard(board_id, list_id, card.id, this.state.title, this.state.description, this.state.green, this.state.blue, this.state.yellow, this.state.red);
    this.props.updateCard(updatedCard);
    this.props.toggleEdit3();
  }

  renderEditForm = () => {
  	if (this.props.editable3 === true ) {
	    return (
	      <div className="d-flex">
	      	<div>
	      		<form 
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="Yellow">
              <input type="text" 
                name="yellow" 
                id="yellow" 
                className="form-control"
                placeholder='Yellow'
                onChange={this.handleChangeYellow}
              />
              </label>
              <input type="submit"
                value="Update"
                className="btn btn-success"
                required
              />
              <Button color="warning" onClick={this.props.toggleEdit3}>
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
				  	<button className="btn btn-info" onClick={this.props.toggleEdit3}>
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