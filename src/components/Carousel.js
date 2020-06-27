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
          description: 'Match on a Movie App',
          imgSrc: WePickSignUp,
          link: 'https://devgrub.com',
          selected: false
        },
        {
          id: 1,
          title: 'Chitter',
          description: 'Twitter Clone',
          imgSrc: WePickTransformers,
          link: 'https://github.com/hansa-lallu/chitter-challenge',
          selected: false
        },
        {
          id: 2,
          title: 'Bank',
          description: 'A Tech test to demonstrate OOP',
          imgSrc: WePickGuardians,
          link: 'https://github.com/hansa-lallu/bank-tech-test',
          selected: false
        },
        {
          id: 3,
          title: 'Number 3',
          description: 'A Tech test to demonstrate OOP',
          imgSrc: WePickGuardians,
          link: 'https://github.com/hansa-lallu/bank-tech-test',
          selected: false
        },
        {
          id: 4,
          title: 'Number 4',
          description: 'A Tech test to demonstrate OOP',
          imgSrc: WePickGuardians,
          link: 'https://github.com/hansa-lallu/bank-tech-test',
          selected: false
        },
        {
          id: 5,
          title: 'Number 5',
          description: 'A Tech test to demonstrate OOP',
          imgSrc: WePickGuardians,
          link: 'https://github.com/hansa-lallu/bank-tech-test',
          selected: false
        },
        {
          id: 6,
          title: 'Number 6',
          description: 'A Tech test to demonstrate OOP',
          imgSrc: WePickGuardians,
          link: 'https://github.com/hansa-lallu/bank-tech-test',
          selected: false
        },
        {
          id: 7,
          title: 'Number 7',
          description: 'A Tech test to demonstrate OOP',
          imgSrc: WePickGuardians,
          link: 'https://github.com/hansa-lallu/bank-tech-test',
          selected: false
        },
        {
          id: 8,
          title: 'Number 8',
          description: 'A Tech test to demonstrate OOP',
          imgSrc: WePickGuardians,
          link: 'https://github.com/hansa-lallu/bank-tech-test',
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