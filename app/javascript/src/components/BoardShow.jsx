import React, { Component } from 'react';

export default class BoardShow extends React.Component {
	render() {

		const lists = this.props.location.lists

	  return (
	  	<div className="container">
		    <div className="m-3 w-100">
		    	params {lists[0].title}
		    </div>
		  </div>	
	  )
	}
}