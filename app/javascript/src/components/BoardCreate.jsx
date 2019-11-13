import React, { Component } from 'react';
import { addBoard } from '../APIs/boards';
import { Button } from 'reactstrap';

export default class BoardCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      toggle: false
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
     toggle: false
    });
  }

  toggleCreateForm = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  };

  render () {
    if (this.state.toggle === false) {
      return (
        <Button outline color="primary" onClick={this.toggleCreateForm}> 
          Create a new board
        </Button>
      )
    } else {
      return (
        <div>
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
            <Button 
              className="ml-2"
              color="warning"
              onClick={this.toggleCreateForm}
            >
              Cancel
            </Button>
          </form>
        </div>
      );
    }
  }
}