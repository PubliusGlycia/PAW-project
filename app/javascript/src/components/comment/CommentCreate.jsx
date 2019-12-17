import React, { Component } from 'react';
import { addComment } from '../../APIs/comment';

export default class CommentCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      comment: '',
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChangeComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  }

  handleSubmit = async e =>{
    e.preventDefault();
    const board_id = this.props.board_id;
    const list_id = this.props.list_id;
    const card_id = this.props.card_id;
    const newComment = await addComment(board_id, list_id, card_id, 'Autor', this.state.comment);
    this.props.onSubmit(newComment);
    this.setState({  
      email: '',
      comment: '',
    });
  }

  render() {

    const cardColomnStyle = {
      textAlign:'left',
    }
    
    return (
      <aside  className="comment-section">
        <h2 style={cardColomnStyle}>Comment:</h2>
        <div>
          <div className="member-container">
            <div className="card-member"></div>
          </div>
          <div className="comment">
            <form onSubmit={this.handleSubmit}>
              <label>
                <textarea required="" rows="3" onChange={this.handleChangeComment}placeholder="Write a comment..."></textarea>
                <div>
                  <input type="submit" className="button not-implemented" value="Save" />
                </div>
              </label>
            </form>
          </div>
        </div>
      </aside>
    );
  }
}
