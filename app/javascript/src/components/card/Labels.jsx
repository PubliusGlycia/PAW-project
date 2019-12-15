import React, { Component, useState  } from 'react';
import ListIndex from '../list/ListIndex';
import { getBoard } from '../../APIs/boards';
import CardEdit from './CardEdit'
import { Badge } from 'reactstrap';
import { fetchCards, archiveCard } from '../../APIs/cards'
import CardIndex from '../card/CardIndex'

export default class Labels extends React.Component {
  constructor(props) {
		super(props);
		this.state = { 
		  editable: false,
		  modal: false,
		}
		this.toggle = this.toggle.bind(this);
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

	handleClickArchive = async () => {
    	const { board_id, list_id, card } = this.props;
		const archive = 'true';
    	const cardToArchive = await archiveCard(board_id, list_id, card.id, archive);
    	this.props.archiveCard(cardToArchive); 
  	};

	render() {

	// const title = this.props.location.state.title
  // const board_id = this.props.match.params.id
  const cardBadgeStyle = {
    padding: '20px',
    margin: '0px 5px 0px 0px',
    borderRadius: '3px',
    minWidth: '30em',
    maxWidth: '30em',
  }

  const card = this.props.card;

	  return (
      <div>
        
      <Badge style={cardBadgeStyle} color="success" pill>nahnahhaah </Badge>
      <CardEdit 
				card={card}
				card_id={this.props.card_id}
				board_id={this.props.board_id}
				list_id={this.props.list_id} 
				editable={this.state.editable}
				toggleEdit={this.toggleEdit}
				updateCard={this.props.updateCard}
			/>
      <Badge style={cardBadgeStyle} color="warning" pill> </Badge>
      <Badge style={cardBadgeStyle} color="danger" pill> </Badge>
      <Badge style={cardBadgeStyle} color="primary" pill> </Badge>
    </div> 
	  );
	}
}

/* import React, {Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button } from 'reactstrap';
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CardShow from './CardShow'
export default class Labels extends React.Component {

  constructor(props) {
		super(props);
		this.state = { 
		  editable: false,
		  modal: false,
		}
		this.toggle = this.toggle.bind(this);
    }

    cardTitle = () => {
      // const editable = this.state.editable;
      // if (editable === false ) {
        return (
            this.props.card.title
          )
      // }
        
      
      }
    
    render() {

      const cardStyle = {
        backgroundColor: '#efefef',
        borderRadius: '3px',
        minWidth: '17em',
        maxWidth: '17em',
        padding: '100em',
        };

      return (
        
          <div className="col-10 p-4" style={cardStyle} >
          </div>
          <div>
          {this.cardTitle()}
          </div>
          <div>
            <link
              rel='stylesheet'
              href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
            />
            </div>
          <div className="col-10 p-4" style={cardStyle} >
          </div>
          <div className="col-10 p-4" style={cardStyle} >
          </div>
          <div className="col-10 p-4" style={cardStyle} >
          </div>
          <div className="col-10 p-4" style={cardStyle} >
          </div>
      )}
 } */
  
