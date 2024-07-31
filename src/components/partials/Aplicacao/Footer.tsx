import React, { Component } from 'react'
import { Container, Nav } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-light mt-5">
        <Container className="mt-5 text-center">
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
                </Nav.Item>
            </Nav>
            <small>&copy; 2024 Your Company. All rights reserved.</small>
        </Container>
      </footer>
    )
  }
}
