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

  refreshComments = async () => {
    const comments = await fetchComment(this.props.board_id, this.props.list_id, this.props.card_id);
    this.setState({
		comment: comments
    }); 
  }

	render() {
	  return (
      <div className="m-2">
		    <Col>
				{this.state.comment.map((comment, i) => (
					<div className="m-2" key={i}>
						<CommentShow 
							comment={comment}
							board_id={this.props.board_id}
							list_id={this.props.list_id}
							card_id={this.props.card_id}
						/>
					</div>
					))}
				<CommentCreate 
					board_id={this.props.board_id}
					list_id={this.props.list_id} 
					card_id={this.props.card_id}
					onSubmit={this.addCommentToList} 
				/>
		    </Col>
    </div>
	  )
  }
}