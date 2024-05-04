/* eslint-disable no-unused-vars */
import React from "react";
import {Row, Col} from 'react-bootstrap';
import './Pages.css';
import { productsArray } from "../productsStore";
import ProductCard from "../components/ProductCard";



function Store(){
    return(
    <><h1 align="center" className="p-3">Bakery Items</h1>
    <Row xs={1} md={3} className='g-4'>

            {productsArray.map((product, idx) => (
                <Col align='center' key={idx}>
                    <ProductCard product={product} />
                </Col>
            ))}

        </Row></>
    )
};

export default Store;