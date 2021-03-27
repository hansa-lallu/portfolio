import React from 'react';
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'
// import { Jumbotron } from 'react-bootstrap';

function About(props) {

  const skills = [
    "Rails",
    "Ruby",
    "RSpec",
    "Capybara",
    "Sinatra",
    "JavaScript",
    "Node.js",
    "Express.js",
    "React",
    "Jasmine",
    "Jest",
    "Enzyme",
    "jQuery",
    "MongoDB",
    "Active Record",
    "PostgreSQL",
    "SQL",
    "HTML",
    "CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "Travis CI",
    "Circle CI",
    "Semaphore CI",
    "Heroku",
    "AWS",
    "Netlify",
    "Sidekiq",
    "Rollbar",
    "Agile methodology",
    "XP Values",
    "Test-Driven-Development",
    "Object Orientated Principles",
    "Pair Programming",
    "Wireframing",
  ]

  const styles = {
    customBadge: {
      backgroundColor: 'rgb(245, 148, 163)',
      border: '1.5px solid rgb(226, 96, 90)',
      fontSize: '20px'
    }
  }

  return (
    <Container>
      <div className="projects-title">
        About me.
      </div>
      <p>
        An ambitious Full-Stack Software Developer currently working as a Technical Support Enginner/Trainee Ruby Dev. Makers Academy Graduate - A highly intensive 16-week software engineering bootcamp.
        Previously worked as a Physiotherapist in New Zealand and London.
      </p>
      <div className="projects-title">
        Tech skills.
          <div>
          {
            skills.map(
              (skillName) =>
                <Badge style={{ ...styles.customBadge }} pill variant="primary">{skillName}</Badge>
            )
          }
        </div>
      </div>
    </Container>
  )
}

export default About;