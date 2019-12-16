import React, { Component } from 'react';
import { fetchComment } from '../../APIs/comment';



export default class CommentShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
		  editable: false,
		  modal: false,
		}
		this.toggle = this.toggle.bind(this);
	  }

	commentAuthor = () => {
		return (
			this.props.comment.author
		)
    }
 
	comment = () => {
		return (
			this.props.comment.comment
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
		await this.refreshComments();
	  }
	
	refreshComments = async () => {
		const board_id = this.props.board_id 
		const list_id = this.props.list_id
		const card_id = this.props.card_id
		const comments = await fetchComment(board_id, list_id, card_id);
		this.setState({
		  comments,
		}); 
	  }

	render() {
		const comment = this.props.comment;
		
	  	return (
			<dl>
				<dt>{this.commentAuthor}</dt>
				<dd>{this.comment}</dd>
			</dl>
		)
	}
}