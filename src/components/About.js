import React from 'react';
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'
// import { Jumbotron } from 'react-bootstrap';

function About(props) {

  const skills = [
    "Ruby on Rails",
    "RSpec",
    "Capybara",
    "Sinatra",
    "JavaScript",
    "Node.js",
    "React",
    "Jasmine",
    "Jest",
    "Enzyme",
    "MongoDB",
    "Active Record",
    "PostgreSQL",
    "SQL",
    "HTML",
    "CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "Circle CI",
    "Semaphore CI",
    "Heroku",
    "AWS",
    "Sidekiq",
    "Rollbar",
    "Agile methodology",
    "XP Values",
    "Test-Driven-Development",
    "Object Orientated Principles",
    "Pair Programming",
  ]

  const styles = {
    customBadge: {
      backgroundColor: 'rgb(243, 197, 197)',
      border: '1.5px solid rgb(226, 96, 90)',
      fontSize: '15px',
      margin: '3px'
    }
  }

  return (
    <Container>
      <div className="projects-title">
        About me.
      </div>
      <div className="about-me">
        <p>+ An ambitious Full Stack Software Developer currently working as a Technical Support Enginner/Trainee Ruby Dev.</p>
        <p>+ Makers Academy Graduate - A highly intensive 16-week software engineering bootcamp.</p>
        <p>+ Previously worked as a Physiotherapist in New Zealand and London.</p>
      </div>
      <div className="projects-title">
        Tech skills.
          <div>
          {
            skills.map(
              (skillName) =>
                <Badge style={{ ...styles.customBadge }} variant="outline-secondary">{skillName}</Badge>
            )
          }
        </div>
      </div>
    </Container>
  )
}

export default About;