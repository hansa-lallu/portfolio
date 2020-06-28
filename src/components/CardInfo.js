import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {
  
  const style = useSpring({ opacity: 1, from: {opacity: 0}});

  return(
    <animated.div className="h-card-info" style={style}>
      <p className='h-card-title'>{props.title}</p>
      <p className="h-card-description">{props.description}</p>
      <p className="h-tech-stack">{props.techStack}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">Check out the Code</a>
    </animated.div>
  );
};

export default CardInfo;