import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImg from "../assets/heroPhone.svg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div>
      <Container className="vh-100">
        <Row className="mt-3">
          <Col sm={6} className="d-flex align-items-center">
            <div>
              <h1>
                Manage Contacts in a{" "}
                <span style={{ color: "#CCC3F8" }}>Quick Book!</span>
              </h1>
              <p>Instantly export your contacts as a CSV file.</p>
              <Link to="/input">
                <Button className="hero-btn" variant="outline-primary" size="lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </Col>
          <Col sm={6} className="d-flex align-items-center justify-content-end">
            <img src={heroImg} alt="Quickbooks" width="100%" height="85%" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
