import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <Container>
    <Row>
    <Col><Card style={{ width: '38rem' }}>
      <Card.Img variant="top" style={{ width: '38rem', height: '28rem' }} src="/biscuit-cake-with-chocolate-drips.jpg" alt='Drip Cake Image' />
      <Card.Body>
        <Card.Title>About Us</Card.Title>
        <Card.Text>
         We have been baking for a long time.
        </Card.Text>
        <Button variant="primary" href="/">Back to Shop</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '38rem'}}>
      <Card.Img variant="top" style={{ width: '38rem', height: '28rem' }} src="/strawberry-fruit-cake-fresh-strawberry-wooden-table.jpg" alt='Strawberry Cake Image' />
      <Card.Body>
        <Card.Title>About Us</Card.Title>
        <Card.Text>
         We have been baking for a long time.
        </Card.Text>
        <Button variant="primary" href="/Gallery">Go to Gallery</Button>
      </Card.Body>
    </Card></Col>

    {/* <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="/biscuit-cake-with-chocolate-drips.jpg" alt='Cake Image' />
      <Card.Body>
        <Card.Title>About Us</Card.Title>
        <Card.Text>
         We have been baking for a long time.
        </Card.Text>
        <Button variant="primary" href="/Gallery">Gallery</Button>
      </Card.Body>
    </Card> */}

    </Row>
    </Container>
  );
}

export default About;









 
 