/* eslint-disable react/style-prop-object */
import Carousel from "react-bootstrap/Carousel";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import './Pages.css';


function Gallery() {
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
    <>
      <Carousel data-bs-theme="dark" >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/batmancakecoopy.png"
            alt="Batman Cake"
          />
          <Carousel.Caption>
            <h2>Batman Cake!</h2>
            <h5>
              A chocolate cake with vanilla icing and a chocolate Batman Logo.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/e.png" alt="White Roses" />
          <Carousel.Caption>
            <h2>White Roses</h2>
            <h5 style={{ backgroundColor: "black", color: "beige" }}>
              White roses made for a wedding cake with fondant.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/lightup-cake.png"
            alt="Light Up Cake"
          />
          <Carousel.Caption style={{ color: "beige" }}>
            <h2>Light Up Cake</h2>
            <h5>A Chocolate cake with fondant and light decorations.</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/d.png"
            alt="Plants vs Zombies character"
          />
          <Carousel.Caption style={{ color: "beige" }}>
            <h2>Pea Shooter!</h2>
            <h5>A Plants vs Zombies character made with fondant.</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
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
              <Card.Title>{imageInfo.title}</Card.Title>
              <Card.Text>{imageInfo.text}</Card.Text>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Gallery;
