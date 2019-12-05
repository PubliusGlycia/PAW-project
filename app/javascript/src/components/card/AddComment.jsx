import React from 'react';

const Comments = () => {

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
          <label>
            <textarea required="" rows="1" placeholder="Write a comment..."></textarea>
            <div>
              <input type="submit" className="button not-implemented" value="Save" />
            </div>
          </label>
        </div>
      </div>
    </aside>
  );
};

export default Comments;
