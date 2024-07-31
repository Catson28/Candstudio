import { Container, Navbar, Nav, Row, Col, Button } from 'react-bootstrap';

const App = () => {
  return (
    <Container style={{ paddingTop: '20px', paddingBottom: '60px', maxWidth: '1000px' }}>
      <header className="masthead">
        <h3 className="muted">Project name</h3>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Nav className="mr-auto" style={{ display: 'table', width: '100%' }}>
              <Nav.Item as="li" style={{ display: 'table-cell', width: '1%' }}>
                <Nav.Link href="#" className="active" style={{ textAlign: 'center', fontWeight: 'bold', borderLeft: '1px solid rgba(255,255,255,.75)', borderRight: '1px solid rgba(0,0,0,.1)' }}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ display: 'table-cell', width: '1%' }}>
                <Nav.Link href="#" style={{ textAlign: 'center', fontWeight: 'bold', borderLeft: '1px solid rgba(255,255,255,.75)', borderRight: '1px solid rgba(0,0,0,.1)' }}>Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ display: 'table-cell', width: '1%' }}>
                <Nav.Link href="#" style={{ textAlign: 'center', fontWeight: 'bold', borderLeft: '1px solid rgba(255,255,255,.75)', borderRight: '1px solid rgba(0,0,0,.1)' }}>Services</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ display: 'table-cell', width: '1%' }}>
                <Nav.Link href="#" style={{ textAlign: 'center', fontWeight: 'bold', borderLeft: '1px solid rgba(255,255,255,.75)', borderRight: '1px solid rgba(0,0,0,.1)' }}>Downloads</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ display: 'table-cell', width: '1%' }}>
                <Nav.Link href="#" style={{ textAlign: 'center', fontWeight: 'bold', borderLeft: '1px solid rgba(255,255,255,.75)', borderRight: '1px solid rgba(0,0,0,.1)' }}>About</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ display: 'table-cell', width: '1%' }}>
                <Nav.Link href="#" style={{ textAlign: 'center', fontWeight: 'bold', borderLeft: '1px solid rgba(255,255,255,.75)', borderRight: '1px solid rgba(0,0,0,.1)' }}>Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <div className="jumbotron p-5 mb-4 bg-light rounded-3 text-center" style={{ margin: '80px 0' }}>
        <h1 style={{ fontSize: '100px', lineHeight: 1 }}>Marketing stuff!</h1>
        <p className="lead" style={{ fontSize: '24px', lineHeight: 1.25 }}>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        </p>
        <Button variant="success" size="lg" href="#">
          Get started today
        </Button>
      </div>

      <hr />

      <Row className="marketing">
        <Col md={4}>
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>
          <Button variant="primary" href="#">
            View details »
          </Button>
        </Col>
        <Col md={4}>
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>
          <Button variant="primary" href="#">
            View details »
          </Button>
        </Col>
        <Col md={4}>
          <h2>Heading</h2>
          <p>
            Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.
          </p>
          <Button variant="primary" href="#">
            View details »
          </Button>
        </Col>
      </Row>

      <hr />

      <footer className="footer">
        <p>&copy; Company 2023</p>
      </footer>
    </Container>
  );
};

export default App;