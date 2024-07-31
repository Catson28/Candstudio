import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default class CallToAction extends Component {
  render() {
    return (
      <section className='call-to-action'>
        <Container className="mt-5">
            <Row>
                <Col className="text-center">
                    <h2>Call to action Title</h2>
                    <p>Call to action Description</p>
                    <a href="" className="btn btn-primary">Solicitar</a>
                </Col>
            </Row>
        </Container>        
      </section>
    )
  }
}
