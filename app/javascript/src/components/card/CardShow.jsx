import React, { Component, useState } from 'react';
import CardEdit from './CardEdit'
import LabelEditGreen from './labels/LabelEditGreen'
import LabelEditBlue from './labels/LabelEditBlue'
import LabelEditYellow from './labels/LabelEditYellow'
import LabelEditRed from './labels/LabelEditRed'
import CardDelete from './CardDelete'
import CardCreate from '../card/CardCreate'
import CardIndex from '../card/CardIndex'
import CommentIndex from '../comment/CommentIndex'
import HistoryIndex from '../history/HistoryIndex'
import { fetchCards, archiveCard } from '../../APIs/cards'
import { fetchComment } from '../../APIs/comment'
import {Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';  
import { Container, Row, Col } from 'reactstrap';



export default class CardShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
		  editable: false,
		  editable1: false,
		  editable2: false,
		  editable3: false,
		  editable4: false,
		  modal: false,
		  nmodal: false,
		}
		this.toggle = this.toggle.bind(this);
		this.toggleNested= this.toggleNested.bind(this);
		this.toggleEdit1= this.toggleEdit1.bind(this);
		this.toggleEdit2= this.toggleEdit2.bind(this);
		this.toggleEdit3= this.toggleEdit3.bind(this);
		this.toggleEdit4= this.toggleEdit4.bind(this);
	  }

	cardTitle = () => {
			return (
				  this.props.card.title
			  )
    }
 
	cardDescription = () => {
			if(this.props.card.description === undefined || this.props.card.description === null){
				return ''
			}
			return (
				  this.props.card.description
			  )
	}

	cardGreen = () => {
			if(this.props.card.green === undefined || this.props.card.green === null){
				return ''
			}
			return (
				  this.props.card.green
			  )
	}

	cardBlue = () => {
		if(this.props.card.blue === undefined || this.props.card.blue === null){
			return ''
		}
		return (
			  this.props.card.blue
		  )
	}

	cardRed = () => {
		if(this.props.card.red  === undefined || this.props.card.red === null){
			return ''
		}
		return (
			  this.props.card.red
		  )
	}

	cardYellow = () => {
		if(this.props.card.yellow === undefined || this.props.card.yellow === null){
			return ''
		}
		return (
			  this.props.card.yellow
		  )
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

	  toggleEdit2 = () => {
		this.setState({
		  editable2: !this.state.editable2,
		})
	  }

	  toggleEdit3 = () => {
		this.setState({
		  editable3: !this.state.editable3,
		})
	  }

	  toggleEdit4 = () => {
		this.setState({
		  editable4: !this.state.editable4,
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
		
		const cardColomnStyle = {
            textAlign:'left',
        }

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
							<b><h5>Description:</h5></b><br/>
							<h5>{"\n" + this.cardDescription()}</h5>
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
						<div>
            				<h2 style={cardColomnStyle}>Comments:</h2>
          				</div>
						<Row>
							<CommentIndex 
								board_id={this.props.board_id}
								list_id={this.props.list_id} 
								card_id={this.props.card_id}
							/>
						</Row>
						<hr />
					</Col>
					<Col>  
					<Button outline color="primary" onClick={this.toggleNested}>Labels</Button>
						<div style= {{margin: '40px 0px 0px 10px'}} >
            				<h2 style={cardColomnStyle}>History:</h2>
          				</div>
						<HistoryIndex 
							board_id={this.props.board_id}
							list_id={this.props.list_id} 
							card_id={this.props.card_id}
						/>

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

								<Badge style={cardBadgeStyle} color="primary" pill>{this.cardBlue()}
								<LabelEditBlue 
									card={card}
									card_id={this.props.card_id}
									board_id={this.props.board_id}
									list_id={this.props.list_id} 
									editable2={this.state.editable2}
									toggleEdit2={this.toggleEdit2}
									updateCard={this.props.updateCard}
								/></Badge>

								<Badge style={cardBadgeStyle} color="warning" pill>{this.cardYellow()}
								<LabelEditYellow 
									card={card}
									card_id={this.props.card_id}
									board_id={this.props.board_id}
									list_id={this.props.list_id} 
									editable3={this.state.editable3}
									toggleEdit3={this.toggleEdit3}
									updateCard={this.props.updateCard}
								/></Badge>

								<Badge style={cardBadgeStyle} color="danger" pill>{this.cardRed()}
								<LabelEditRed 
									card={card}
									card_id={this.props.card_id}
									board_id={this.props.board_id}
									list_id={this.props.list_id} 
									editable4={this.state.editable4}
									toggleEdit4={this.toggleEdit4}
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
			 <Badge style={cardBadgeStyleInCard} color="primary" pill>{this.cardBlue()}</Badge>
		 	<Badge style={cardBadgeStyleInCard} color="warning" pill>{this.cardYellow()}</Badge>
			<Badge style={cardBadgeStyleInCard} color="danger" pill>{this.cardRed()}</Badge>
		</div>
	
		  )}
		// </Draggable>
	//   );
	// }
}