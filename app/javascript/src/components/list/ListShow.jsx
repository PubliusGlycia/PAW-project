import React, { Component } from 'react'
import ListEdit from './ListEdit'
import ListDelete from './ListDelete'
import CardCreate from '../card/CardCreate'
import CardIndex from '../card/CardIndex'
import { fetchCards } from '../../APIs/cards'

export default class ListShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      editable: false,
      cards: [],
    }
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
	  	<div className="col-12 p-3" style={listStyle}>
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
          <CardCreate 
              list_id={this.props.list.id}
              board_id={this.props.board_id}
		      	  onSubmit={this.addCardToList}
		        />
          <CardIndex 
            list_id={this.props.list.id}
            board_id={this.props.board_id}
            cards={this.state.cards}
          />
        </div>
		  </div>
	  )
	}
}