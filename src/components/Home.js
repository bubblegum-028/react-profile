import React from 'react';
import { Row, Col, Card, Image, Container } from 'react-bootstrap';
import '../App.css'; // Ensure you import your CSS for additional styling

function Home() {
  return (
    <div className="App-header">
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs={12} sm={10} md={8} className="mb-4">
            <h1 className="text-light mb-4 home-header">WELCOME TO MY PROFILE!</h1>
          </Col>
        </Row>
        <Row className="justify-content-center text-center mt-5">
          <Col xs={8} sm={6} md={4} className="mb-4">
            <Image 
              src={`${process.env.PUBLIC_URL}/Me.jpg`}
              roundedCircle
              fluid
              className="about-image"
            />
            <h4 className="mt-2 text-light">Jairehn Arambulo</h4>
          </Col>
          <Col xs={10} sm={8} md={6} className="d-flex justify-content-center">
            <Card className="border-0 home-card"> {/* Removed specified classes */}
              <Card.Body className="home-card-body">
                <p className="text-light mb-4 home-text">
                  Hello! I’m Jairehn, an aspiring software developer with a passion for problem-solving.
                </p>
                <p className="text-light mb-5 home-text">
                  I’m currently focused on enhancing my skills in web development, and I aim to build
                  innovative and user-friendly applications.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
