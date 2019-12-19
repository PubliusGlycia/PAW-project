import React, { Component } from 'react'
import CommentShow from './CommentShow'
import CommentCreate from './CommentCreate'
import { fetchComment } from '../../APIs/comment'
import { Col } from 'reactstrap'

export default class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      comment: []
    }
    this.addCommentToList = this.addCommentToList.bind(this);
  }
  addCommentToList(newComment) {
    this.setState({
		comment : [newComment, ...this.state.comment],
    }); 
  };

  componentDidMount = async () => {
    await this.refreshComments();
  }

  updateComment = (updatedComment) => {
    	console.log("updateComment")
    	this.setState({
      		comment: this.state.comment.map(comment1 =>
        comment1.id === updatedComment.id ? updatedComment: comment1
      ),
    	});
 	 }

  deleteComment = (commentToDelete) => {
    console.log("deleteCard")
    this.setState({
      comment: this.state.comment.filter(
        comment2 => commentToDelete.id !== comment2.id)
    });
  }

  refreshComments = async () => {
    const comments = await fetchComment(this.props.board_id, this.props.list_id, this.props.card_id);
    this.setState({
		comment: comments
    }); 
  }

	render() {
	  return (
      <div style={{width: '100%'}}>
			{this.state.comment.map((comment, i) => (
				<div key={i}>
					<CommentShow 
						comment={comment}
						board_id={this.props.board_id}
						list_id={this.props.list_id}
						card_id={this.props.card_id}
            updateComment={this.updateComment}
            deleteComment={this.deleteComment}
					/>
				</div>
				))}
			<CommentCreate 
				board_id={this.props.board_id}
				list_id={this.props.list_id} 
				card_id={this.props.card_id}
				onSubmit={this.addCommentToList} 
			/>
    </div>
	  )
  }
}