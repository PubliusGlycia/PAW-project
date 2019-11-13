import React, { Component } from 'react';

export default class CardShow extends React.Component {

	render() {

	  return (
      <div>
        <div className="m-3 w-100">
			     	<div className="m-2">
	            {this.props.card.title}
			      </div>
        </div>
      </div>    
	  );
	}
}