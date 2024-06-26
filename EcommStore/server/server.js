
const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('secret key goes here');
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
// 4000 or port
app.listen(port, () => console.log("Listening on port 4000!"));