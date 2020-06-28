import React from 'react';
import Content from '../components/Content'
import Badge from 'react-bootstrap/Badge'

function About(props) {

  const styles = {
    customBadge: {
      backgroundColor: 'rgb(245, 148, 163)',
      border: '1.5px solid rgb(226, 96, 90)',
      fontSize: '20px'
    }
  }

  return (
    <div>
      <Content>
      <div className="projects-title">
       About me.
      </div>
        <p>An ambitious Full-Stack Software Developer recently graduated from Makers, looking to join a company that embraces professional development. Previously worked as a Physiotherapist in New Zealand and London.</p>
      <div className="projects-title">
        Tech skills.
        <div>
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Ruby</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Rails</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">RSpec</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Capybara</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Sinatra</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">JavaScript</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Node.js</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Express.js</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">React</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Jasmine</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Jest</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Enzyme</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">jQuery</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">MongoDB</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Active Record</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">PostgreSQL</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">SQL</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">HTML</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">CSS</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Bootstrap</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Git</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">GitHub</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Travis CI</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Circle CI</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Code Climate</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Heroku</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Netlify</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Agile methodology</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">XP Values</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Test-Driven-Development</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Object Orientated Principles</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Pair Programming</Badge>{' '}
          <Badge style={{ ...styles.customBadge }} pill variant="primary">Wireframing</Badge>{' '}
        </div>
      </div>
      </Content>
    </div>
  )
}

export default About;