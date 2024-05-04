
const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51OmlJ5ILmuKFXEOJW2DngWsefQv3foua15Q4OdcOYJRTDtKSalbeuxNacGyGFJ4YmGfhcspSd0DAPzLhjB9dObcO00vWrVaoH2');
const port = 4000;
const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());



app.post("/checkout", async ( req, res) => {
    console.log(req.body);
    const items =req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items : lineItems,
        mode: 'payment',
        success_url : "http://localhost:3000/Success",
        cancel_url : "http://localhost:3000/Cancel"

    });

    res.send(JSON.stringify({
        url: session.url
    }));
});
// or port 4000
app.listen(port, () => console.log("Listening on port 4000!"));