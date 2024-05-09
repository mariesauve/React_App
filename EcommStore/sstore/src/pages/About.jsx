import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <Container fluid>
    <Row>
    <Col><Card style={{ width: '100%'}}>
      <Card.Img variant="top" style={{ width: '100%', height: '380px' }} src="/biscuit-cake-with-chocolate-drips.jpg" alt='Drip Cake Image' />
      <Card.Body>
        <Card.Title>About Us</Card.Title>
        <Card.Text>
         We have been baking for a long time.
        </Card.Text>
        <Button variant="primary" href="/">Back to Shop</Button>
      </Card.Body>
      </Card>
    </Col>
      </Row>
    </Container>
  );
}

export default About;









 
 