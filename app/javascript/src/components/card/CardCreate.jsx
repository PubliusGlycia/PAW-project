import React, { Component } from 'react';
import { addCard } from '../../APIs/cards';

export default class CardCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      description: '',
      green: '',
      archive: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmit = async e =>{
    e.preventDefault();
    const board_id = this.props.board_id;
    const list_id = this.props.list_id;
    const newCard = await addCard(board_id, list_id, this.state.title, this.state.description, this.state.green);
    this.props.onSubmit(newCard);
    this.setState({  
     title: '',
     description: '',
     green: '',
     archive: false,
    });
  }

	render() {

	  return (
      <div className="mt-2">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Title" className="mr-2">
            <input type="text" 
              name="title" 
              id="title" 
              className="form-control"
              placeholder="Add Card"
              value={this.state.title}
              onChange={this.handleChangeTitle}
              required
            />
          </label>
          <input 
            type="submit"
            value="Create"
            className="btn btn-success"
            required
          />
        </form>
      </div>    
	  );
	}
}