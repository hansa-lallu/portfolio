import React from 'react';
import { Button }from 'react-bootstrap'
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {
  
  const styles = {
    divFadeIn: useSpring({ opacity: 1, from: {opacity: 0}}),
    customButton: {
      backgroundColor: '#f3929e',
      border: '#f3929e'
    }
  };

  return(
    <animated.div className="h-card-info" style={styles.divFadeIn}>
      <p className='h-card-title'>{props.title}</p>
      <p className="h-card-description">{props.description}</p>
      <p className="h-tech-stack">{props.techStack}</p>

      <Button style={{ ...styles.customButton }} href={props.link} target="_blank" rel="noopener noreferrer" variant="primary" >Check out the code</Button>
    </animated.div>
  );
};

/* <a href={props.link} target="_blank" rel="noopener noreferrer">Check out the Code</a> */
export default CardInfo;