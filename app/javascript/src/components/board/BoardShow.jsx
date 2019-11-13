import React, { Component } from 'react';
import ListIndex from '../list/ListIndex';
import { getBoard } from '../../APIs/boards';

export default class BoardShow extends React.Component {

	render() {

  	const title = this.props.location.state.title
  	const board_id = this.props.match.params.id

	  return (
      <div>
        <div className="m-3 w-100">
            <h3>{title}</h3>
            <div>
                <ListIndex 
                  board_id={board_id}
                />
            </div>
        </div>
      </div>    
	  );
	}
}