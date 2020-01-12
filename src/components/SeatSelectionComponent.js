import { Modal,Button } from 'react-bootstrap';
import React from "react";
import PropTypes from "prop-types";

 export const  SeatSelectionComponent = (props)=>{

        return (<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.headername} 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        {props.popupbody}
        </p>
      </Modal.Body>
      <Modal.Footer>
      <Button id={props.movieid} onClick={props.onHide}>{props.footer}</Button>
      </Modal.Footer>
    </Modal>)
        
}

SeatSelectionComponent.propTypes = {
  headername:PropTypes.string.isRequired,
  popupbody:PropTypes.any.isRequired,
  footer:PropTypes.string.isRequired,
  movieid:PropTypes.string,
  onHide:PropTypes.func.isRequired
}