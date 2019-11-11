import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';
import BoardEdit from './BoardEdit';
import BoardDelete from './BoardDelete';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BoardShow from './BoardShow';

export default class BoardCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  };

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };

  printBoardTitle(boardTitle) {
    if (this.state.edit === false) {
      return (
        <div>
          { boardTitle }
        </div>
      );
    }
  };

  render () {
    const board = this.props.board
    return (
        <div>
          <Col>
            <Card body className="shadow p-3 mb-5 bg-white rounded">

              <CardTitle className="font-weight-bold text-capitalize">
                { this.printBoardTitle(board.title) }
              </CardTitle>

              <BoardEdit 
                toggleEdit={this.toggleEdit}
                edit={this.state.edit}
                board={board}
                updateBoard={this.props.updateBoard}
              />

              <BoardDelete 
                board_id={board.id}
                removeBoardFromList={this.props.removeBoardFromList}
              />

              <Link to={`/boards/${board.id}`} board={board} >
                <Button className="mt-2">
                  Show
                </Button>
              </Link>

            </Card>
          </Col>
        </div>
    )
  }
}