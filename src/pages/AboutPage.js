import React from 'react';
import Hero from '../components/Hero'
import Content from '../components/Content'

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>An ambitious Full-Stack Software Developer recently graduated from Makers, looking to join a company that embraces professional development. Previously worked as a Physiotherapist in New Zealand and London.</p>
      </Content>
    </div>
  );
}

export default AboutPage;