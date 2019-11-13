import React, { Component } from 'react';
import ListIndex from '../list/ListIndex';

export default class BoardShow extends React.Component {
	render() {

		const board = this.props.location.board
		const lists = this.props.location.lists

	  return (
	  	<div>
		    <div className="m-3 w-100">
		    	<h3>{board.title}</h3>
		    	<div>
		    		<ListIndex 
		    			lists={lists} 
		    			board={board}
		    		/>
		    	</div>
		    </div>
		  </div>	
	  )
	}
}