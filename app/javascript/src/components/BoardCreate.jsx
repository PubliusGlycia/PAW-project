import React, { Component } from 'react';
import { addBoard } from '../APIs/boards';

export default class BoardCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
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
    const newBoard = await addBoard(this.state.title);
    this.props.onSubmit(newBoard);
    this.setState({  
     title: '',
    });
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}  >
          <label htmlFor="Title">
            <input type="text" 
              name="title" 
              id="title" 
              className="form-control m-2 p-2"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChangeTitle}
              required
            />
          </label>
          <div>
            <input 
              type="submit"
              value="Create"
              className="btn btn-success m-2"
              required
            />
          </div>
        </form>
      </div>
    );
  }
}