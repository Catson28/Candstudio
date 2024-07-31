import { Navbar, Nav, NavDropdown, Container, Button, Form, FormControl } from 'react-bootstrap';

function HeroPage() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
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
            <Form className="d-flex">
              <FormControl type="text" placeholder="Email" className="me-2" />
              <FormControl type="password" placeholder="Password" className="me-2" />
              <Button variant="outline-success">Sign in</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <div className="jumbotron">
          <h1>Hello, world!</h1>
          <p>
            This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content.
            Use it as a starting point to create something more unique.
          </p>
          <Button variant="primary" size="lg">
            Learn more
          </Button>
        </div>

        <div className="row">
          <div className="col">
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
            </p>
            <Button variant="secondary">View details</Button>
          </div>
          {/* Repeat the above div for other columns */}
        </div>
      </Container>

      <footer className="text-center py-3 mt-5">
        <p>&copy; Company 2024</p>
      </footer>
    </>
  );
}

export default HeroPage;