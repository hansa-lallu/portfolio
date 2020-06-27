import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import WePickSignUp from '../assets/images/WePickSignUp.png';
import WePickGuardians from '../assets/images/WePickGuardians.png';
import WePickTransformers from '../assets/images/WePickTransformers.png';


class Carousel extends React.Component {
  
  constructor(props) {
    super(props);
    this.state ={
      items: [
        {
          id: 0,
          title: 'WePick',
          description: 'Makers Final Project. Teamed up with 5 individuals to overcome a common decision making problem - What movie to watch? Two users start a session and individually like and dislike movies. Once there is a match they are alerted and shown where they can watch the matched movie.',
          imgSrc: WePickSignUp,
          link: 'https://devgrub.com',
          techStack: "Ruby on Rails | PostgreSQL | HTML | CSS | Bootstrap | TMDB and Utelly API integration | RSpec | Capybara | Code Climate | Travis CI",
          selected: false
        },
        {
          id: 1,
          title: 'Chitter',
          description: 'A test driven, lightweight twitter clone built from the ground up.',
          imgSrc: WePickTransformers,
          link: 'https://github.com/hansa-lallu/chitter-challenge',
          techStack: 'Ruby | Sinatra | RSpec | Capybara | PostgreSQL | HTML | CSS',
          selected: false
        },
        {
          id: 2,
          title: 'Bank',
          description: 'A tech test that allows users to create a bank account, make deposits and withdraw funds and print a bank statement. This was a test that made me realise how far I had come in terms of Object Orientated programming and Test Driven Development.',
          imgSrc: WePickGuardians,
          link: 'https://github.com/hansa-lallu/bank-tech-test',
          techStack: "Ruby | RSpec",
          selected: false
        },
        {
          id: 3,
          title: 'Acebook',
          description: 'Working in a team of 6 to create a social media platform. As a team, we learnt a lot about collaborating with git, delegation of work, regular stand-ups, and working with XP values and agile practices.',
          imgSrc: WePickGuardians,
          link: 'https://github.com/hansa-lallu/bank-tech-test',
          techStack: "Ruby on Rails | PostgreSQL | RSpec | Cabybara | Bootstrap | HTML | CSS | Heroku",
          selected: false
        },
        {
          id: 4,
          title: 'Number 3',
          description: 'A Tech test to demonstrate OOP',
          imgSrc: WePickGuardians,
          link: 'https://github.com/hansa-lallu/bank-tech-test',
          techStack: "",
          selected: false
        },
        {
          id: 5,
          title: 'Number 5',
          description: 'A Tech test to demonstrate OOP',
          imgSrc: WePickGuardians,
          link: 'https://github.com/hansa-lallu/bank-tech-test',
          techStack: "",
          selected: false
        },
        {
          id: 6,
          title: 'Number 6',
          description: 'A Tech test to demonstrate OOP',
          imgSrc: WePickGuardians,
          link: 'https://github.com/hansa-lallu/bank-tech-test',
          techStack: "",
          selected: false
        },
        {
          id: 7,
          title: 'Number 7',
          description: 'A Tech test to demonstrate OOP',
          imgSrc: WePickGuardians,
          link: 'https://github.com/hansa-lallu/bank-tech-test',
          techStack: "",
          selected: false
        },
        {
          id: 8,
          title: 'Number 8',
          description: 'A Tech test to demonstrate OOP',
          imgSrc: WePickGuardians,
          link: 'https://github.com/hansa-lallu/bank-tech-test',
          techStack: "",
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
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }

}

export default Carousel;