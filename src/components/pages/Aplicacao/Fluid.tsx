import { Navbar, Nav, NavDropdown, Container, Row, Col, Button } from 'react-bootstrap';

const Fluid = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#home">Project name</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#login">Logged in as Username</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>
          <Col sm={3}>
            <div className="sidebar-nav">
              <ul className="nav flex-column">
                <li className="nav-item">Sidebar</li>
                <li className="nav-item"><a className="nav-link active" href="#">Link</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
                <li className="nav-item">Sidebar</li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
                <li className="nav-item">Sidebar</li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
              </ul>
            </div>
          </Col>
          <Col sm={9}>
            <div className="hero-unit">
              <h1>Hello, world!</h1>
              <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
              <Button variant="primary" size="lg">Learn more &raquo;</Button>
            </div>
            {/* Add your span4 components here */}
          </Col>
        </Row>

        <hr />

        <footer>
          <p>&copy; Company 2013</p>
        </footer>
      </Container>
    </>
  );
}

export default Fluid;