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

  addCardToList = (newCard) => {
    console.log("addCard")
    this.setState({
       cards : [newCard, ...this.state.cards],
    })
  }

  updateCard = (updatedCard) => {
    console.log("updateCard")
    this.setState({
      cards: this.state.cards.map(card =>
        card.id === updatedCard.id ? updatedCard : card
      ),
    });

  }

  deleteCard = (cardToDelete) => {
    console.log("deleteCard")
    this.setState({
      cards: this.state.cards.filter(card => cardToDelete.id !== card.id)
    });
  }

  componentDidMount = async () => {
		await this.refreshCards();
	  }
	
	refreshCards = async () => {
    console.log("refreshCards")
		const board_id = this.props.board_id 
		const list_id = this.props.list_id
		const cards = await fetchCards(board_id, list_id);
		this.setState({
		  cards
		}); 
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
                updateCard={this.updateCard}
                deleteCard={this.deleteCard}
              />
			      </div>
			    ))}

          <div className="m-2" style={cardColomnStyle}>
            <CardCreate
              board_id={this.props.board_id}
		          list_id={this.props.list_id}
		      	  onSubmit={this.addCardToList}
		        />
		      </div>
		    </Col>
    </div>
	  )
  }
}
