import React from 'react';
// import { Jumbotron } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

function Contact(props) {
  return (
    <div className="jumbotron fluid">
        <Row className="justify-content-center py-5"> 
            {props.contact && <h2 className="projects-title">{props.contact}</h2>}
        </Row>
    </div>
  );
}

export default Contact;