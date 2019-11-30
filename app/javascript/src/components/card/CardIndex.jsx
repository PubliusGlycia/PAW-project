import React, { Component } from 'react'
import CardShow from './CardShow'
import CardCreate from './CardCreate'
import { fetchCards } from '../../APIs/cards'
import { Col } from 'reactstrap'

export default class CardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      cards: []
    }
  }

	render() {
		
		const cardColomnStyle = {
			minWidth: '17em',
		}

	  return (
      <div className="m-2">
		    <Col>
        
	  		  {this.props.cards.map((card, i) => (
		     	  <div className="m-2" style={cardColomnStyle} key={i}>
	            <CardShow 
                card={card}
                board_id={this.props.board_id}
			          list_id={this.props.list_id}
                updateCard={this.props.updateCard}
                deleteCard={this.props.deleteCard}
              />
			      </div>
			    ))}

          <div className="m-2" style={cardColomnStyle}>
            <CardCreate
              board_id={this.props.board_id}
		          list_id={this.props.list_id}
		      	  onSubmit={this.props.addCardToList}
		        />
		      </div>
		    </Col>
    </div>
	  )
  }
}
