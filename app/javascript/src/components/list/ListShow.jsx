import React, { Component } from 'react'
import ListEdit from './ListEdit'
import ListDelete from './ListDelete'
import CardCreate from '../card/CardCreate'
import CardIndex from '../card/CardIndex'
import { fetchCards } from '../../APIs/cards'
import { Droppable} from "react-beautiful-dnd"

export default class ListShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      editable: false,
      cards: [],
    }
  }

state = { showing: true };
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
      cards: this.state.cards.filter(
        card => cardToDelete.id !== card.id)
    });
  }

  archiveCard = (cardToArchive) => {
    console.log("archiveCard")
    this.setState({
      cards: this.state.cards.filter(
        card => cardToArchive.id !== card.id)
    });
  }

  listTitle = () => {
  	const editable = this.state.editable;
  	if (editable === false ) {
  		return (
				this.props.list.title
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
    const list_id = this.props.list.id
    const cards = await fetchCards(board_id, list_id);
    this.setState({
      cards,
    }); 
  }

	render() {

    const listStyle = {
      backgroundColor: '#dfe1e6',
      borderRadius: '3px'
    };

    const list = this.props.list;

	  return (
      <Droppable droppableId={String(this.props.list.id)}>
      {provided =>(
        <div {...provided.droppableProps} ref={provided.innerRef} className="col-12 p-3" style={listStyle}>
	  		<div className="d-flex justify-content-between">
		  		<div>
	      		{this.listTitle()}
	      	</div>
	      	<div className="d-flex">
	      		<ListEdit 
	      			board_id={this.props.board_id}
	      			list={list} 
	      			editable={this.state.editable}
	      			toggleEdit={this.toggleEdit}
              updateList={this.props.updateList}
	      		/>

	      		<ListDelete
              board_id={this.props.board_id}
              list={list}
              deleteList={this.props.deleteList}
            />
	      	</div>
        </div>
        <div>
          <CardIndex 
            list_id={this.props.list.id}
            board_id={this.props.board_id}
            cards={this.state.cards}
            updateCard={this.updateCard}
            deleteCard={this.deleteCard}
            addCardToList={this.addCardToList}
            archiveCard={this.archiveCard}
          />
        </div>
        {provided.placeholder}
		  </div>
      )}
      </Droppable>
	  )
	}
  
}