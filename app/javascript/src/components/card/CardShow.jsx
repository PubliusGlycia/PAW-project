import React, { Component } from 'react';
import CardEdit from './CardEdit'
import CardDelete from './CardDelete'
import CardCreate from '../card/CardCreate'
import CardIndex from '../card/CardIndex'
import { fetchCards } from '../../APIs/cards'

export default class CardShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
		  editable: false,
		}
	  }

	  cardTitle = () => {
		const editable = this.state.editable;
		if (editable === false ) {
			return (
				  this.props.card.title
			  )
		}
	}

	toggleEdit = () => {
		this.setState({
		  editable: !this.state.editable,
		})
	  }

	componentDidMount = async () => {
		await this.refreshCards();
	  }
	
	refreshCards = async () => {
		const board_id = this.props.board_id 
		const list_id = this.props.list_id
		const cards = await fetchCards(board_id, list_id);
		this.setState({
		  cards,
		}); 
	  }


	render() {
		const cardStyle = {
			backgroundColor: '#efefef',
			borderRadius: '3px'
		  };

		  const card = this.props.card;

	  return (
		<div className="col-10 p-2" style={cardStyle}>
		<div className="d-flex justify-content-between">
			<div>
			{this.cardTitle()}
			</div>
		<div className="d-flex">
			<CardEdit 
				card={card}
				card_id={this.props.card_id}
				board_id={this.props.board_id}
				list_id={this.props.list_id} 
				editable={this.state.editable}
				toggleEdit={this.toggleEdit}
				updateCard={this.props.updateCard}
			/>

			<CardDelete
				board_id={this.props.board_id}
				list_id={this.props.list_id}
				card_id={this.props.card_id}
				card={card}
				deleteCard={this.props.deleteCard}
	  		/>
		</div>
  		</div>
		</div>  
	  );
	}
}