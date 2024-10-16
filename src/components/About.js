import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import '../App.css'; // Ensure you import your CSS for additional styling

function About() {
  return (
    <div className="about-background">
      <Row className="justify-content-center text-center">
        <Col xs={12} sm={10} md={8} className="mb-4">
          <h2 className="text-light about-header">About Me</h2>
        </Col>
        <Col xs={10} sm={8} md={6} className="d-flex justify-content-center">
          <Card className="bg-dark text-light p-3 shadow-sm border-0">
            <Card.Body>
              <Card.Text>
                Hi! I’m a 3rd Year Bachelor of Science in Computer Science student. I have a strong passion for technology and problem-solving.
              </Card.Text>
              <Card.Text>
                I work as a freelance photographer and own Gunita Pictures, capturing special moments for my clients.
              </Card.Text>
              <Card.Text>
                In my free time, I enjoy playing the guitar and watching movies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
