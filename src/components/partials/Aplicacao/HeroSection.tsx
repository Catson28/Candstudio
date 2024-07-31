import React, { Component } from 'react'
import { Button, Col, Container, Row} from 'react-bootstrap';

export default class HeroSection extends Component {
  render() {
    return (
      <section className='hero-section'>
        <Container className="mt-5">
            <Row>
                <Col className="p-5 mb-4 bg-light rounded-3 text-center">
                    <h1>Lumeit</h1>
                    <p>
                    Construimos a sua imagem digital.
                    </p>  
                    <Button variant="primary">Solicitar Servico</Button>
                </Col>
            </Row>
        </Container>
      </section>
    )
  }
}
