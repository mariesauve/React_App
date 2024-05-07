/* eslint-disable jsx-a11y/img-redundant-alt */
import { Button, Card, CardImg } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";


function CartProduct(props){
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

        return(
            <>
            <Card style={{ width: '26rem' }}>
            <CardImg src={productData.image} alt="cake image"size={32}/>
            <Card.Title>{productData.title}</Card.Title>
            <Card.Text>{quantity} total</Card.Text>
            <Card.Text>${(quantity * productData.price).toFixed(2)}</Card.Text>
          
            <Button variant="danger" size="sm" onClick={() => cart.deleteFromCart(id)}>
                Remove</Button>    
                </Card>
            </>
        )
}

export default CartProduct;