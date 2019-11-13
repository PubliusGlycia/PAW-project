import React, { Component } from 'react';
import { updateList } from '../../APIs/lists';

export default class ListEdit extends React.Component {

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = async e =>{
    const {board, list} = this.props
    e.preventDefault();
    const updatedList = await updateList(board.id, list.id, this.state.title);
    this.props.updateList(updatedList);
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
                placeholder={this.props.list.title}
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
				  	<button onClick={this.props.toggleEdit}>
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