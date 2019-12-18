import React, {useState} from 'react';
import { Badge } from 'reactstrap';

const CardBadge = (props) => {

  const [show1=true, show2=true, show3=true, show4=true] = useState(true);

  const cardBadgeStyle = {
    padding: '10px',
    margin: '0px 5px 0px 0px',
    width: '50px',
  }

  const handleShow = (variable) => {
      variable = !variable;
  };
  
  return (
    <div>
      {show1 && <Badge style={cardBadgeStyle} onClick={handleShow(show1)} color="success" pill> </Badge>}
      {show2 && <Badge style={cardBadgeStyle} onClick={handleShow(show2)} color="warning" pill> </Badge>}
      {show3 && <Badge style={cardBadgeStyle} onClick={handleShow(show3)} color="danger" pill> </Badge>}
      {show4 && <Badge style={cardBadgeStyle} onClick={handleShow(show4)} color="primary" pill> </Badge>}
    </div>
  );

}

export default CardBadge;
