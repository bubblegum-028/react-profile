import React from 'react';
import { Row, Col, Card, Image, Container } from 'react-bootstrap'; // Import Bootstrap components
import '../App.css'; // Ensure you import your CSS for additional styling


function Home() {
  return (
    <div className="App-header">
      <Container> {/* Adding a Bootstrap Container */}
        <Row className="justify-content-center text-center">
          <Col md={4} className="mb-4">
            <h1 className="text-light mb-4">WELCOME TO MY PROFILE!</h1>
          </Col>
        </Row>
        <Row className="justify-content-center text-center mt-5"> {/* Margin top for spacing */}
          <Col md={4} className="mb-4">
            {/* Image as a circle */}
            <Image 
              src={`${process.env.PUBLIC_URL}/Me.jpg`} // Ensure the image is correctly referenced
              roundedCircle
              fluid // Makes image responsive
              className="about-image" // Apply image style from CSS
            />
            <h4 className="mt-2 text-light">Jairehn Arambulo</h4>
          </Col>
          <Col md={6} className="d-flex justify-content-center"> {/* Centering the card horizontally */}
            <Card className="bg-dark text-light p-4 shadow-sm border-0">
              <Card.Body>
                <p className="text-light mb-4">
                  Hello! I’m Jairehn, an aspiring software developer with a passion for problem-solving.
                </p>
                <p className="text-light mb-5">
                  I’m currently focused on enhancing my skills in web development, and I aim to build
                  innovative and user-friendly applications. My goal is to become a proficient software
                  developer who can contribute to impactful projects and help make a positive difference in
                  the tech world.
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
