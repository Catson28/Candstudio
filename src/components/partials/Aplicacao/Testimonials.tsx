import { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

export default class Testimonials extends Component {
  render() {
    return (
      <section className='testimonial-section'>
        <Container className="mt-5">
          <Row>
            <Col className='text-center'>
              <blockquote className='blockquote'>
                <p className="mb-0">Trabalho perfeito</p>
                <footer className='blockquote-footer'></footer>
              </blockquote>
            </Col>
            <Col className='text-center'>
              <blockquote className='blockquote'>
                <p className="mb-0">Bom proficional</p>
                <footer className='blockquote-footer'></footer>
              </blockquote>
            </Col>
            <Col className='text-center'>
              <blockquote className='blockquote'>
                <p className="mb-0">Estao de Parabens pelo trabalho exercido</p>
                <footer className='blockquote-footer'></footer>
              </blockquote>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
