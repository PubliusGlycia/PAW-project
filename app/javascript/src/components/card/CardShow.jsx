import React, { Component, useState } from 'react';
import CardEdit from './CardEdit'
import CardDelete from './CardDelete'
import CardCreate from '../card/CardCreate'
import CardIndex from '../card/CardIndex'
import { fetchCards } from '../../APIs/cards'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';  
import { Draggable } from "react-beautiful-dnd"


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
 
	cardDescription = () => {
		const editable = this.state.editable;
		if (editable === false ) {
			return (
				  this.props.card.description
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
		  <Draggable draggableId={String(this.props.card.id)} index={this.props.list_id}>
		  {provided => (
			<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>  
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
          <ModalHeader toggle={this.toggle}>
		  <b>{this.cardTitle()}</b>
		  </ModalHeader>
          <ModalBody>
		  	<b>Description:</b>
		  	<p>{"\n" + this.cardDescription()}</p>
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
				deleteCard={this.props.deleteCard}
	  		/>
		</div>
  		</div>
		</div>
		</div>
		  )}
		</Draggable>
	  );
	}
}