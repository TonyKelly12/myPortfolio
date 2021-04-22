import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import WorkCard from '../../card/work-card';
import './styles.css'

function JobSelectionModal(props) {
    return (
      <Modal
        {...props}
       
        aria-labelledby="contained-modal-title-vcenter"
        centered       
      >
        <Modal.Body>
          <WorkCard/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default JobSelectionModal