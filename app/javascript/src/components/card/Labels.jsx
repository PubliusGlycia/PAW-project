import React, { Component } from 'react';
import ListIndex from '../list/ListIndex';
import { getBoard } from '../../APIs/boards';
import { Badge } from 'reactstrap';

export default class Labels extends React.Component {

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

	  return (
      <div>
    
      <Badge style={cardBadgeStyle} color="success" pill> </Badge>
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
  
