import React from 'react';
// import Col from 'react-bootstrap/Col'
// // import { Jumbotron } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';

// function Contact(props) {
//   return (
//     <div className="jumbotron fluid">
//         <Row className="justify-content-md-center"> 
//           {/* <Col sm>sm=true</Col>
//           <Col sm> {props.contact && <h2 className="projects-title">{props.contact}</h2>}</Col>
//           <Col sm>sm=true</Col>        */}
//         </Row>
//     </div>
//   );
// }

// export default Contact;

export default function ContactForm() {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
<input type="text" name="firstname" id="firstname" />
        <label htmlFor="yourname">
          Your Name:
        </label> <br />
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail">
          Your Email:
        </label> <br />
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">
          Message:
        </label> <br />
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}