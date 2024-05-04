/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { Button, Navbar, Nav, NavDropdown, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

function NavbarComponent() {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async() =>{
    await fetch('http://localhost:4000/checkout', {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({items: cart.items})
    }).then((response) => {
        return response.json();

    }).then((response) =>{
        if(response.url) {
            window.location.assign(response.url);
        }
    })
  }
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
   
    <>   <Navbar expand="sm">
        <Navbar.Brand href="/">Bakery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
          <Nav className="me-auto">
            <Nav.Link href="/Gallery">Gallery</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <NavDropdown title="More Stuff" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cupcakes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cookies</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                 Brownies
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Button onClick={handleShow}> Cart {productsCount}</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
          {productsCount > 0 ? (
            <>
              <p> Items in your cart: </p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartProduct>
              ))}

              <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
              <Button variant="success" onClick={checkout}>
                Purchase items!
              </Button>
            </>
          ) : (
            <><h1> There are no items in your cart</h1>
            <Button variant="info" href="/Gallery">
                Check out our Gallery?!
              </Button></>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
