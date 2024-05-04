/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */

const productsArray = [
    {
        id: "price_1P9xFvILmuKFXEOJ0WK8R6C1",
        image:"stained-glass-cake.png",
        title: "Vanilla Cake",
        price: 55.99
       
    },
    {
        id: "price_1P9xJtILmuKFXEOJeBpQLujJ",
        image:"chocoCake.png",
        title: "Chocolate Cake",
        price: 25.99
        
    },
    {
        id: "price_1P9xOUILmuKFXEOJuRMcr1jF",
        image:"Jordan-s-Birthday-cake.png",
        title: "Lemon Cake",
        price: 45.99
        
    },
    {
        id: "price_1P9bM5ILmuKFXEOJGEWrIW4O",
        image:"batmancakecoopy.png",
        title: "Marble Cake",
        price: 55.99
        
    },
    {
        id: "price_1PBnhwILmuKFXEOJhLe1TFLR",
        image:"lightup-cake.png",
        title: "Strawberry Cake",
        price: 65.99
        
    },
    {
        id: "price_1PBnjMILmuKFXEOJsDCo2iY3",
        image:"falll-cupcake-copy.png",
        title: "12 Cupcakes",
        price: 25.99
       
    }
];



function getProductData(id){
    let productData = productsArray.find( product => product.id === id);

    if(productData == undefined)
    console.log("Product data does not exist for id: " + id);
    return productData;
}

export {productsArray, getProductData };