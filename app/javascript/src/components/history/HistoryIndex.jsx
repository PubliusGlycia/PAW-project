import React, { Component } from 'react'
import HistoryShow from './HistoryShow'
// import HistoryCreate from './HistoryCreate'
import { fetchComment } from '../../APIs/comment'
import { Col } from 'reactstrap'

export default class HistoryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      history: []
    }
    this.addHistoryToList = this.addHistoryToList.bind(this);
  }

  addHistoryToList(newHistory) {
    this.setState({
		history : [newHistory, ...this.state.history],
    }); 
  };

  componentDidMount = async () => {
    await this.refreshHistory();
  }

  refreshHistory = async () => {
    const histories = await fetchComment(this.props.board_id, this.props.list_id, this.props.card_id);
    this.setState({
		history: histories
    }); 
  }

	render() {
	  return (
      <div className="m-2">
		    <Col>   
				{this.state.history.map((history, i) => (
					<div className="m-2" key={i}>
						<HistoryShow 
							history={history}
							board_id={this.props.board_id}
							list_id={this.props.list_id}
							card_id={this.props.card_id}
						/>
					</div>
					))}
				 {/* <HistoryCreate 
					board_id={this.props.board_id}
					list_id={this.props.list_id} 
					card_id={this.props.card_id}
					onSubmit={this.addHistoryToList} 
				/> */}
		    </Col>
    </div>
	  )
  }
}