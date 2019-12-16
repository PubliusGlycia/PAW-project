import React, { Component, useState } from 'react';
import CardEdit from './CardEdit'
import LabelEditGreen from './labels/LabelEditGreen'
import AddComment from './AddComment';
import CardDelete from './CardDelete'
import CardCreate from '../card/CardCreate'
import CardIndex from '../card/CardIndex'
import { fetchCards, archiveCard } from '../../APIs/cards'
import {Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';  
import { Container, Row, Col } from 'reactstrap';



export default class CardShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
		  editable: false,
		  editable1: false,
		  modal: false,
		  nmodal: false,
		}
		this.toggle = this.toggle.bind(this);
		this.toggleNested= this.toggleNested.bind(this);
		this.toggleEdit1= this.toggleEdit1.bind(this);
	  }

	cardTitle = () => {
		// const editable = this.state.editable;
		// if (editable === false ) {
			return (
				  this.props.card.title
			  )
		// }
			
		
    }
 
	cardDescription = () => {
		// const editable = this.state.editable;
		// if (editable === false ) {
			if(this.props.card.description === undefined || this.props.card.description === null){
				return ''
			}
			return (
				  this.props.card.description
			  )
		// }
		// if(editable === true){
			// if(this.props.card.description === undefined || this.props.card.description === null){
				// this.props.card.description = ''
			// }
		// }
	}

	cardGreen = () => {
		// const editable = this.state.editable;
		// if (editable === false ) {
			if(this.props.card.green === undefined || this.props.card.green === null){
				return ''
			}
			return (
				  this.props.card.green
			  )
		// }
		// if(editable === true){
			// if(this.props.card.description === undefined || this.props.card.description === null){
				// this.props.card.description = ''
			// }
		// }
	}

	toggle() {
		this.setState({
		  modal: !this.state.modal
		});
	  }

	toggleNested() {
		this.setState({
			nmodal: !this.state.nmodal
		})
    }  

	toggleEdit = () => {
		this.setState({
		  editable: !this.state.editable,
		})
	  }

	  toggleEdit1 = () => {
		this.setState({
		  editable1: !this.state.editable1,
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

	handleClickArchive = async () => {
    	const { board_id, list_id, card } = this.props;
		const archive = 'true';
    	const cardToArchive = await archiveCard(board_id, list_id, card.id, archive);
    	this.props.archiveCard(cardToArchive); 
  	};

	render() {
	
		const cardStyle = {
			backgroundColor: '#efefef',
			borderRadius: '3px',
			minWidth: '17em',
			maxWidth: '17em'
		  };
		
		const cardBadgeStyle = {
			padding: '20px',
			margin: '5px 5px 10px 10px',
			borderRadius: '3px',
			minWidth: '35em',
			maxWidth: '35em',
		}  

		const cardBadgeStyleInCard = {
			margin: '0px 5px 0px 0px',
			
		  }

		  const card = this.props.card;
		

	  return (
		//   <Draggable draggableId={String(this.props.card.id)} index={this.props.list_id}>
		//   {provided => (
			// <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>  
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
       
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{maxWidth: '80%'}}>
          <ModalHeader toggle={this.toggle}>
		  <b>{this.cardTitle()}</b>
		  </ModalHeader>
          <ModalBody>
		  	<Container style={{maxWidth: '95%'}}>
				<Row>
					<Col>  
						<Row>
							<b><h4>Description:</h4></b><br />
							<p>{"\n" + this.cardDescription()}</p>
						</Row>
						<Row>
							<CardEdit 
								card={card}
								card_id={this.props.card_id}
								board_id={this.props.board_id}
								list_id={this.props.list_id} 
								editable={this.state.editable}
								toggleEdit={this.toggleEdit}
								updateCard={this.props.updateCard}
							/>
						</Row>
						<hr />
						<Row>
							<AddComment/>
						</Row>
					</Col>
					<Col>  
					<Button outline color="primary" onClick={this.toggleNested}>Labels</Button>
						<Modal isOpen={this.state.nmodal} toggle={this.toggleNested} className={this.props.className} >
						<ModalHeader>Labels</ModalHeader>

						<ModalBody>
							<div>
								<Badge style={cardBadgeStyle} color="success" pill>{this.cardGreen()}
								<LabelEditGreen
									card={card}
									card_id={this.props.card_id}
									board_id={this.props.board_id}
									list_id={this.props.list_id} 
									editable1={this.state.editable1}
									toggleEdit1={this.toggleEdit1}
									updateCard={this.props.updateCard}
								/></Badge>

								<Badge style={cardBadgeStyle} color="primary" pill>
								<CardEdit 
									card={card}
									card_id={this.props.card_id}
									board_id={this.props.board_id}
									list_id={this.props.list_id} 
									editable={this.state.editable}
									toggleEdit={this.toggleEdit}
									updateCard={this.props.updateCard}
								/></Badge>

								<Badge style={cardBadgeStyle} color="warning" pill>
								<CardEdit 
									card={card}
									card_id={this.props.card_id}
									board_id={this.props.board_id}
									list_id={this.props.list_id} 
									editable={this.state.editable}
									toggleEdit={this.toggleEdit}
									updateCard={this.props.updateCard}
								/></Badge>

								<Badge style={cardBadgeStyle} color="danger" pill>
								<CardEdit 
									card={card}
									card_id={this.props.card_id}
									board_id={this.props.board_id}
									list_id={this.props.list_id} 
									editable={this.state.editable}
									toggleEdit={this.toggleEdit}
									updateCard={this.props.updateCard}
								/></Badge>

							</div> 
						</ModalBody>

						<ModalFooter>
						<Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
						</ModalFooter>
						</Modal>
					</Col>
				</Row>
			</Container>
		  </ModalBody>
          <ModalFooter>
            
			<CardDelete
				board_id={this.props.board_id}
				list_id={this.props.list_id}
				card_id={this.props.card_id}
				card={card}
				deleteCard={this.props.deleteCard}
	  		/>
			
			<Button color='warning' onClick={e =>
	        window.confirm("Are you sure you wish to archive this card?") &&
	        this.handleClickArchive(e)}>Archive</Button>

			<Button color='secondary' onClick={this.toggle}>Cancel</Button>
          
		  </ModalFooter>
        </Modal>
      </div>
		<div className="d-flex">
		</div>
  		</div>
		 	<Badge style={cardBadgeStyleInCard} color="success" pill>{this.cardGreen()}</Badge>
		 	<Badge style={cardBadgeStyleInCard} color="warning" pill> </Badge>
			<Badge style={cardBadgeStyleInCard} color="danger" pill> </Badge>
			<Badge style={cardBadgeStyleInCard} color="primary" pill> </Badge>
		</div>
	
		  )}
		// </Draggable>
	//   );
	// }
}