import React, { Component } from 'react';

const BoardShow = ({ match }) => {
  return (
    <div className="m-3 w-100">
      I AM THE BOARD SHOW {match.params.id}
    </div>
  )
}

export default BoardShow;