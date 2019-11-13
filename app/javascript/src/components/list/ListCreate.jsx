import React, { Component } from 'react';
import { addList } from '../../APIs/lists';

export default class ListCreate extends React.Component {
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
    const board_id = this.props.board.id
    const newList = await addList(board_id, this.state.title);
    this.props.onSubmit(newList);
    this.setState({  
     title: '',
    });
  }

  render () {
    return (
      <div className="mt-2">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Title" className="mr-2">
            <input type="text" 
              name="title" 
              id="title" 
              className="form-control"
              placeholder="Title"
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