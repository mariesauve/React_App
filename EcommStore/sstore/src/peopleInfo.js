/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */

const peopleArray = [
    {
        id: "price_1P9xFvILmuKFXEOJ0WK8R6C1",
        image:"stained-glass-cake.png",
        Name: "Vanilla Cake",
        Password: "hahaha",
        Email: "me@me.com"
       
    },
    {
        id: "price_1P9xJtILmuKFXEOJeBpQLujJ",
        image:"chocoCake.png",
        Name: "Vanilla Cake",
        Password: "hahaha",
        Email: "me@me.com"
        
    },
    {
        id: "price_1P9xOUILmuKFXEOJuRMcr1jF",
        image:"Jordan-s-Birthday-cake.png",
        Name: "Vanilla Cake",
        Password: "hahaha",
        Email: "me@me.com"
        
    },
    {
        id: "price_1P9bM5ILmuKFXEOJGEWrIW4O",
        image:"batmancakecoopy.png",
        Name: "Vanilla Cake",
        Password: "hahaha",
        Email: "me@me.com"
        
    },
    {
        id: "price_1PBnhwILmuKFXEOJhLe1TFLR",
        image:"lightup-cake.png",
        Name: "Vanilla Cake",
        Password: "hahaha",
        Email: "me@me.com"
        
    },
    {
        id: "price_1PBnjMILmuKFXEOJsDCo2iY3",
        image:"falll-cupcake-copy.png",
        Name: "Vanilla Cake",
        Password: "hahaha",
        Email: "me@me.com"
       
    }
];



function getPeopleData(id){
    let peopleData = peopleArray.find( people => people.id === id);

    if(peopleData == undefined)
    console.log("Product data does not exist for id: " + id);
    return peopleData;
}

export {peopleArray, getPeopleData };