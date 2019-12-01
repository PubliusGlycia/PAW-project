import React, { Component, useState } from 'react';
import CardEdit from './CardEdit'
import CardDelete from './CardDelete'
import CardCreate from '../card/CardCreate'
import CardIndex from '../card/CardIndex'
import { fetchCards } from '../../APIs/cards'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';  



export default class CardShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
		  editable: false,
		  modal: false,
		}
		this.toggle = this.toggle.bind(this);
	  }

	  cardTitle = () => {
		const editable = this.state.editable;
		if (editable === false ) {
			return (
				  this.props.card.title
			  )
		}
	}

	toggle() {
		this.setState({
		  modal: !this.state.modal
		});
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
			borderRadius: '3px',
			minWidth: '17em',
			maxWidth: '17em'
		  };

		  const card = this.props.card;

		

	  return (
		<div className="col-10 p-2" style={cardStyle} color='danger' onClick={this.toggle}>{this.props.buttonLabel}
		<div className="d-flex justify-content-between" color='danger' onClick={this.toggle}>{this.props.buttonLabel}
		
			<div>
			{this.cardTitle()}
			</div>
			<div>
			  <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
        />
       
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.toggle}>Do Something</Button>{' '}
            <Button color='secondary' onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
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
				deleteCard={this.props.card.deleteCard}
	  		/>
		</div>
  		</div>
		</div>  
	  );
	}
}

