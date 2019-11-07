import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { updateBoard } from '../APIs/boards';

export default class BoardEdit extends React.Component {
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
    const {board} =this.props
    e.preventDefault();
    const updatedBoard = await updateBoard(board.id, this.state.title);
    this.props.updateBoard(updatedBoard);
    this.props.toggleEdit();
  }

  renderButtons = () => {
    return (
      <div className="d-flex">
        <input type="submit"
          value="Update"
          className="btn btn-success"
          required
        />
        <Button 
          className="ml-3"
          color="warning"
          onClick={this.props.toggleEdit}
        >
          Cancel
        </Button>
      </div>
    )
  }

  render () {
    if (this.props.edit === false) {
      return (
        <Button 
          color="warning"
          onClick={this.props.toggleEdit}
        >
          Edit
        </Button>
      );
    } else {
      return (
        <div>
          <div>
            <form 
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="Title">
              <input type="text" 
                name="title" 
                id="title" 
                className="form-control"
                placeholder={this.props.board.title}
                onChange={this.handleChangeTitle}
              />
              </label><br />
              {this.renderButtons()}
            </form>
          </div>
        </div>
        )
    }
  }
}