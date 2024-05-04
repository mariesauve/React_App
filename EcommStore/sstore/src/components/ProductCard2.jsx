/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Card, Button, Form, Row, Col, CardImg} from 'react-bootstrap';
import { productsArray } from '../productsStore';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';

function ProductCard2(props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    
    const imageUrls = [
        {
          id: "1",
          image: "batmancakecoopy.png",
          title: "Batman Cake",
          text: "Awesome Batman cake for your next party!",
        },
        {
          id: "2",
          image: "biscuit-cake-with-chocolate-drips.jpg",
          title: "chocolate-drips Cake",
          text: "chocolate-drips cake for your next party!",
        },
        {
          id: "3",
          image: "Bluecupcake.png",
          title: "Bluecupcake",
          text: "Bluecupcake for your next party!",
        },
        {
          id: "4",
          image: "chocoCake.png",
          title: "chocoCake",
          text: "chocoCake for your next party!",
        },
        {
          id: "5",
          image: "comic-cakes-79.jpg",
          title: "comic-cakes",
          text: "comic-cakes for your next party!",
        },
        {
          id: "6",
          image: "falll-cupcake-copy.png",
          title: "CupCake",
          text: "CupCake for your next party!",
        },
      ];
    return (
        // <Card>
        //     <Card.Body>
        //        <CardImg src={Image} alt='Product image'></CardImg>
        //         <Card.Title>{product.title}</Card.Title>
        //         <Card.Text>${product.price}</Card.Text>
        //         <Button variant="primary">Add To Cart</Button>
        //     </Card.Body>
        // </Card>
        <Container>
        <Row>
          {imageUrls.map((imageInfo, index) => (
            <Col xs={6} md={4} key={index}>
              <Image
                src={imageInfo.image}
                alt="Cake Picture"
                style={{ height: "170px", width: "180px" }}
                fluid
              />
              <Card.Text>${product.price}</Card.Text>
                    {productQuantity > 0 ?
                        <>
                            <Form as={Row}>
                                <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                                <Col sm="6">
                                    <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                    <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                                </Col>
                            </Form>
                            <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                        </>
                        :
                        <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>}
              <Card.Text>{product.text}</Card.Text>
            </Col>
          ))}
        </Row>
      </Container>

    )
};

export default ProductCard2;