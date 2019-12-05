import React from 'react';
import { Badge } from 'reactstrap';

const Example = (props) => {
  
  const cardBadgeStyle = {
    padding: '10px',
    margin: '0px 5px 0px 0px',
    width: '50px'
  }

  return (
    <div>
      <Badge style={cardBadgeStyle} color="success" pill>                 </Badge>
      <Badge style={cardBadgeStyle} color="warning" pill>                 </Badge>
      <Badge style={cardBadgeStyle} color="danger" pill>                  </Badge>
      <Badge style={cardBadgeStyle} color="primary" pill>                   </Badge>
    </div>
  );

}

export default Example;
