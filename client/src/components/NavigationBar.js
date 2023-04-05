import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar id="navbar" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: "#FF6000" }}>
            <strong>Quick</strong>books
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/input" style={{ color: "#FFA559" }}>
                Input
              </Nav.Link>
              <Nav.Link as={Link} to="/view" style={{ color: "#FFA559" }}>
                View
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
