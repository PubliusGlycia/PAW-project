import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Labels from './Labels';
import { Badge, Button } from 'reactstrap';
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CardShow from './CardShow'
const Sidebar = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  let archiveOrUnarchive;
  let deleteButton = null;
  if (props.archived) {
    archiveOrUnarchive = (
      <li onClick={props.handleUnarchive} className="unarchive-button">
        <i className="send-icon sm-icon"></i>
        Send to board
      </li>
    );
    deleteButton = (
      <Link to={`/boards/${props.boardId}`}>
        <li onClick={props.handleDelete} className="red-button">
          <i className="minus-icon sm-icon"></i>
          Delete
        </li>
      </Link>
    );
  } else {
    archiveOrUnarchive = (
      <div style={cardColomnStyle}>
            <Button onClick={props.handleClickArchive} outline color="primary">Archive</Button>
        </div>
    );
  }

  const cardColomnStyle = {
    padding: '1px',
  }

  return (
    
    <aside className="modal-buttons">
      <h2>Add <Badge color="secondary">New</Badge></h2>
      <ul>
        <div style={cardColomnStyle}>
            <Button outline color="primary">Members</Button>
        </div>

        <div style={cardColomnStyle}>
            <Button outline color="primary" onClick={toggleNested}>Labels</Button>
            <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Labels</ModalHeader>

            <ModalBody>
              <Labels/>
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
              <Button color="secondary" onClick={toggleAll}>All Done</Button>
            </ModalFooter>
          </Modal>
        </div>

        <div style={cardColomnStyle}>
          <Button color="primary" outline>
            CheckList <Badge color="secondary">4</Badge>
          </Button>
        </div>

        <div style={cardColomnStyle}>
            <Button outline color="primary">Due Date</Button>
        </div>

        <div style={cardColomnStyle}>
            <Button outline color="primary">Attachment</Button>
        </div>

      </ul>
      <h2>Actions </h2>
      <ul>

        <div style={cardColomnStyle}>
            <Button outline color="primary">Attachment</Button>
        </div>

        <div style={cardColomnStyle}>
            <Button outline color="primary">Move</Button>
        </div>

        <div style={cardColomnStyle}>
            <Button outline color="primary">Copy</Button>
        </div>

        <div style={cardColomnStyle}>
            <Button outline color="primary">Subscribe</Button>
        </div>
        <hr />
        {archiveOrUnarchive}
        {deleteButton}
      </ul>
      <Button color="link">Share and more...</Button>
    </aside>
  );
};

export default Sidebar;
