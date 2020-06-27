import React from 'react';
import CardInfo from '../components/CardInfo'

function Card(props) {

  return (
    <div className="d-inline-block h-card" onClick={(e) => props.click(props.item)}>
      <img className="h-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
      { props.item.selected && <CardInfo title={props.item.title} link={props.item.link} description={props.item.description} techStack={props.item.techStack} /> }
    </div>
  );

}

export default Card;