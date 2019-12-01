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
    this.setState({
       cards : [newCard, ...this.state.cards],
    })
  }

  componentDidMount = async () => {
    await this.refreshCards();
  }

  refreshCards = async () => {
    const cards = await fetchCards(this.props.list_id);
    this.setState({
      cards
    }); 
  }

  updateCard = (updatedCard) => {
    this.setState({
      cards: this.state.cards.map(card =>
        card.id === updatedCard_id ? updatedCard : card
      ),
    });
  }

  deleteCard = (cardToDelete) => {
    this.setState({
      cards: this.state.cards.filter(card => cardToDelete.id !== card.id)
    });
  }

	render() {
		
		const cardColomnStyle = {
			minWidth: '17em',
			maxWidth: '17em',
		}

	  return (
      <div className="m-2">
		    <Col>
          <div className="m-2" style={cardColomnStyle}>
            {/* <CardCreate 
		          list_id={this.props.list.list_id}
		      	  onSubmit={this.addCardToList}
		        /> */}
		      </div>
        
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
		    </Col>
    </div>
	  )
  }
}
