import { Container, Form, Button } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <Container>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter your phone number" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>

        <Form.Group controlId="formCopyMail">
          <Form.Check type="checkbox" label="Send copy to my email" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Email
        </Button>
      </Form>
    </Container>
  );
};

export default ContactPage;