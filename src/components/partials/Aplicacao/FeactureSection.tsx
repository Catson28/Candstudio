import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class FeactureSection extends Component {
  render() {
    return (
      <>
      <section className="feactures-section">
        <Container className="mt-5">
            <Row>
              <Col className='text-center'><span className="fa fa-icon"></span><h3>Title</h3><p>descript</p></Col>
              <Col className='text-center'><span className="fa fa-icon"></span><h3>Title</h3><p>descript</p></Col>
              <Col className='text-center'><span className="fa fa-icon"></span><h3>Title</h3><p>descript</p></Col>
            </Row>
        </Container>
      </section>
      </>
    )
  }
}
