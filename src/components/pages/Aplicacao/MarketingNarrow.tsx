import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap';

const Template = () => {
  return (
    <Container className="container-narrow" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Navbar.Brand href="#">Project name</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="#" className="active">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

      <hr />

      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <h1 className="display-3">Super awesome marketing speak!</h1>
        <p className="lead">
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        </p>
        <Button variant="success" size="lg">Sign up today</Button>
      </div>

      <hr />

      <Row className="marketing">
        <Col md={6}>
          <h4>Subheading</h4>
          <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
          <h4>Subheading</h4>
          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
          <h4>Subheading</h4>
          <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        </Col>
        <Col md={6}>
          <h4>Subheading</h4>
          <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
          <h4>Subheading</h4>
          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
          <h4>Subheading</h4>
          <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        </Col>
      </Row>

      <hr />

      <footer className="footer">
        <p>&copy; Company 2013</p>
      </footer>
    </Container>
  );
};

export default Template;
