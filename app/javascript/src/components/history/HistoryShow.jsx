import React, { Component } from 'react';
import { fetchHistory } from '../../APIs/history';
import { fetchComment } from '../../APIs/comment';

export default class HistoryShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
		  editable: false,
		  modal: false,
		}
		this.toggle = this.toggle.bind(this);
	  }

	historyAuthor = () => {
		return (
			this.props.history.author
		)
    }

	historyDate = () => {
		const date = new Date(this.props.history.created_at);
		const str = date.toUTCString();
		return (
			str
		)
    }

	historyComment = () => {
        if(this.historyAuthor() == undefined){
            this.props.history.history = "New comment added, "+ this.historyDate();
        }else{
        this.props.history.history = this.historyAuthor() + " add new comment, "+ this.historyDate();
        }
        
        return (
            this.props.history.history
		)
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
		await this.refreshHistory();
	  }
	
	refreshHistory = async () => {
		const board_id = this.props.board_id 
		const list_id = this.props.list_id
		const card_id = this.props.card_id
		const histories = await fetchComment(board_id, list_id, card_id);
		this.setState({
		  histories,
		}); 
	  }

	render() {
		const history = this.props.history;
		const cardColomnStyle = {
            textAlign:'left',
        }

	  	return (
            <div style = {cardColomnStyle} >
            <dl>
				<dd>{this.historyComment()}</dd>
			</dl>
            </div>
		)
	}
}