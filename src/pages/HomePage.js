import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel'; 
import About from '../components/About';
import Contact from '../components/Contact';
import ContactForm from '../components/Contact';


function HomePage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} mainText={props.mainText}/>
      <About />
      <Carousel title={props.projects}/>
      {/* <Contact contact={props.contact}/> */}
      <ContactForm></ContactForm>
    </div>
  );
}

export default HomePage;
/* <div className="projects-title">Projects.</div> */