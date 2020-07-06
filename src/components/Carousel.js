import React from 'react';
import Card from '../components/Card';
import Row from 'react-bootstrap/Row';
import Header from '../components/Header'


import WePickSignUp from '../assets/images/WePickSignUp.png';
import ComingSoon from '../assets/images/comingsoon.jpg';
import rps from '../assets/images/rps.png';
import WeatherAPI from '../assets/images/WeatherAPI.png';
import Bank from '../assets/images/Bank.png';
import Acebook from '../assets/images/Acebook.png';
import fireworksbnb from '../assets/images/fireworksbnb.png';
import feijoa from '../assets/images/feijoa.png';


class Carousel extends React.Component {
  
  constructor(props) {
    super(props);
    this.state ={
      title: this.props.title,
      items: [
        {
          id: 0,
          title: 'WePick',
          description: 'Makers Final Project. Teamed up with 5 individuals to overcome a common decision making problem - What movie to watch? Two users start a session and individually like and dislike movies. Once there is a match they are alerted and shown where they can watch the matched movie.',
          imgSrc: WePickSignUp,
          link: 'https://github.com/jasylwong/wepick',
          techStack: "Ruby on Rails | PostgreSQL | HTML | CSS | Bootstrap | TMDB and Utelly API integration | RSpec | Capybara | Code Climate | Travis CI",
          selected: false
        },
        {
          id: 1,
          title: 'Feijoa',
          description: 'A CRUD application built from scratch to learn the basics of Node.js and Express.js',
          imgSrc: feijoa,
          link: 'https://github.com/hansa-lallu/retail-app',
          techStack: "Node.js | Express.js | MongoDB | HTML | CSS",
          selected: false
        },
        {
          id: 2,
          title: 'Bank',
          description: 'A tech test that allows users to create a bank account, make deposits and withdraw funds and print a bank statement. This was a test that made me realise how far I had come in terms of Object Orientated programming and Test Driven Development.',
          imgSrc: Bank,
          link: 'https://github.com/hansa-lallu/bank-tech-test',
          techStack: "Ruby | RSpec",
          selected: false
        },
        {
          id: 3,
          title: 'Acebook',
          description: 'Working in a team of 6 to create a social media platform. As a team, we learnt a lot about collaborating with git, delegation of work, regular stand-ups, and working with XP values and agile practices.',
          imgSrc: Acebook,
          link: 'https://github.com/Megscode/acebook_undefined',
          techStack: "Ruby on Rails | PostgreSQL | RSpec | Cabybara | Bootstrap | HTML | CSS | Heroku",
          selected: false
        },
        {
          id: 4,
          title: 'Weather API',
          description: 'Search temperature of a city using an open source weather API. Background changes dependent on temperature.',
          imgSrc: WeatherAPI,
          link: 'https://github.com/hansa-lallu/weather-app',
          techStack: "React | Jest",
          selected: false
        },
        {
          id: 5,
          title: 'Rock Paper Scissors',
          description: 'Classic game played against the computer.',
          imgSrc: rps,
          link: 'https://github.com/hansa-lallu/rps-js',
          techStack: "JavaScript | HTML | CSS",
          selected: false
        },
        {
          id: 6,
          title: 'News Summary',
          description: '',
          imgSrc: ComingSoon,
          link: 'https://github.com/lookupdaily/news-summary-challenge',
          techStack: "JavaScript | Jasmine ",
          selected: false
        },
        {
          id: 7,
          title: 'Fireworks BnB',
          description: 'An AirBnB clone, created as a group project in week six of the course.',
          imgSrc: fireworksbnb,
          link: 'https://github.com/DavidStewartLDN/fireworksBnB',
          techStack: "Ruby | HTML | CSS | RSpec | Cabybara | Active Record | PostgreSQL | Sinatra",
          selected: false
        },
        {
          id: 8,
          title: 'Chitter',
          description: 'A test driven, lightweight twitter clone built from the ground up.',
          imgSrc: ComingSoon,
          link: 'https://github.com/hansa-lallu/chitter-challenge',
          techStack: 'Ruby | Sinatra | RSpec | Capybara | PostgreSQL | HTML | CSS',
          selected: false
        },
      ]
    }
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true

    items.forEach(item => {
      if(item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items
    });
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }

  render() {
    return(
      <div>
        <Header title={this.state.title}></Header>
        <Row className="justify-content-around mb-5">
          {this.makeItems(this.state.items)}
        </Row>
      </div>
    );
  }

}

export default Carousel;