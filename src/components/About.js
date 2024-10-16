import React from 'react';
import { Row, Col, Card } from 'react-bootstrap'; // Import Bootstrap components
import '../App.css'; // Ensure you import your CSS for additional styling

function About() {
  return (
    <div className="about-background"> {/* Apply background style from CSS */}
      <Row className="justify-content-center text-center"> {/* Centering the text horizontally */}
        <Col md={12} className="mb-4">
          <h2 className="text-light about-header">About Me</h2> {/* About Me Header */}
        </Col>
        <Col md={6} className="d-flex justify-content-center"> {/* Centering the card horizontally */}
          <Card className="bg-dark text-light p-4 shadow-sm border-0">
            <Card.Body>
              <Card.Text>
                Hi! I’m a 3rd Year Bachelor of Science in Computer Science student. I have a strong passion for technology and problem-solving, which fuels my desire to become a proficient software developer.
              </Card.Text>
              <Card.Text>
                In addition to my studies, I work as a freelance photographer and own Gunita Pictures, a photography studio where I capture special moments and create lasting memories for my clients.
              </Card.Text>
              <Card.Text>
                When I’m not coding or taking photos, I enjoy hobbies such as playing the guitar and watching movies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
