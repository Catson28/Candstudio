import { Container, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Form className="p-4 bg-white border rounded shadow-sm" style={{ maxWidth: '300px' }}>
        <h2 className="text-center mb-4">Please sign in</h2>
        <Form.Group controlId="formEmail">
          <Form.Control type="email" placeholder="Email address" className="mb-3" style={{ fontSize: '16px', height: 'auto', padding: '7px 9px' }} />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Control type="password" placeholder="Password" className="mb-3" style={{ fontSize: '16px', height: 'auto', padding: '7px 9px' }} />
        </Form.Group>
        <Form.Group controlId="formCheckbox" className="mb-3">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-block">
          Sign in
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;