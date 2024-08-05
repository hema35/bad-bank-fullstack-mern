import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-light">
      <Container>
        <Row>
          <Col md={6} className="text-center mt-3">
            <small className="text-secondary">
              &copy; {new Date().getFullYear()} My Bad Bank. All Rights Reserved.
            </small>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <a
                href="https://github.com/hema35/bad-bank-fullstack-mern"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                GitHub Repository
              </a>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>
              <a href="mailto:support@badbank.com" className="text-light">
                Email to support Team
              </a>
              </p>
              <p>
              <a href="tel:7326664185">Phone Call us at (732)-666-4185</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
