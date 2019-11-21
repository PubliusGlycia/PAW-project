import React, { Component } from 'react'
import CardShow from './CardShow'

export default class CardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      cards: [],
    }
  }

	render() {

	  return (
	  	<div className="m-2">
          Hello from card index
	  			{this.props.cards.map((card, i) => (
			     	<div key={i}>
	            <CardShow 
                card={card}
              />
			      </div>
			    ))}
		  </div>
	  )
	}
}