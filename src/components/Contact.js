import React from 'react';
// import { Jumbotron } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Contact(props) {

  const styles = {
    customButton: {
      
    }
  }

  return (
    <div className="jumbotron-bg-img fluid p-0">
        <Row className="justify-content-center py-5"> 
            {props.contact && <h2 className="projects-title">{props.contact}</h2>}
            <Button href='https://github.com/hansa-lallu/'></Button>
        </Row>
    </div>
  );
}

export default Contact;