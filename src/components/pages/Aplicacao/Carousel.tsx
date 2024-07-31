import { Container, Navbar, Nav, Button, Carousel, Row, Col } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Project name</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#" className="dropdown-toggle" role="button" aria-expanded="false">
                Dropdown
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/examples/slide-01.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Example headline.</h3>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
            <Button variant="primary">Sign up today</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/examples/slide-02.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Another example headline.</h3>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
            <Button variant="primary">Learn more</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/examples/slide-03.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>One more for good measure.</h3>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
            <Button variant="primary">Browse gallery</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="marketing">
        <Row>
          <Col md={4}>
            <img src="img/examples/140x140.png" className="img-circle" alt="Marketing 1" />
            <h2>Heading</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            <p><Button variant="primary">View details</Button></p>
          </Col>
          <Col md={4}>
            <img src="img/examples/140x140.png" className="img-circle" alt="Marketing 2" />
            <h2>Heading</h2>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
            <p><Button variant="primary">View details</Button></p>
          </Col>
          <Col md={4}>
            <img src="img/examples/140x140.png" className="img-circle" alt="Marketing 3" />
            <h2>Heading</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
            <p><Button variant="primary">View details</Button></p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <hr className="featurette-divider" />

            <div className="featurette">
              <img src="img/examples/browser-icon-chrome.png" className="featurette-image pull-right" alt="Featurette 1" />
              <h2 className="featurette-heading">First featurette headling. <span className="text-muted">It'll blow your mind.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>

            <hr className="featurette-divider" />

            <div className="featurette">
              <img src="img/examples/browser-icon-firefox.png" className="featurette-image pull-left" alt="Featurette 2" />
              <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>

            <hr className="featurette-divider" />

            <div className="featurette">
              <img src="img/examples/browser-icon-safari.png" className="featurette-image pull-right" alt="Featurette 3" />
              <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>

            <hr className="featurette-divider" />
          </Col>
        </Row>
      </Container>


      <footer className="text-center p-4">

        <Container>
          <Row>
            <Col>
              <p>
                &copy; {new Date().getFullYear()} Company, Inc. &middot; <a href="#">Privacy</a> &middot;{' '}
                <a href="#">Terms</a>
              </p>            
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default MyCarousel;