import React from 'react';
// import { Jumbotron } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LinkedIn from '../assets/images/linkedin.png';
import GitHub from '../assets/images/GitHub.png'


function Contact(props) {
  return (
    <div className="jumbotron-bg-img fluid p-5">
      <Row className="justify-content-center">
        {props.contact && <h2 className="projects-title">{props.contact}</h2>}
      </Row>
      <Row className="justify-content-center" float="center">
        <Col sm></Col>
        <Col sm className="col-4 d-flex justify-content-center"> <a href='https://www.linkedin.com/in/hansa-lallu'>
          <img src={LinkedIn} width="100" alt="linkedin"></img>
        </a></Col>
        <Col sm className="col-4 d-flex justify-content-center">  <a href='https://github.com/hansa-lallu'>
          <img src={GitHub} width="95" alt="GitHub"></img>
        </a></Col>
        <Col sm ></Col>
      </Row>
    </div>
  );
}

export default Contact;