import { createPaymentIntent } from "../services/paymentServices.js";

const productos = [
    { id: 1, name: "papas", price: 1000 },
    { id: 2, name: "queso", price: 500 },
    { id: 3, name: "hamburguesa", price: 1500 },
    { id: 4, name: "soda", price: 1000 },
    { id: 5, name: "golosinas", price: 800 }
];


const carrito = async (req, res) => {
    const prodId = req.query.id;

    try {
        const productRequested = productos.find( el => el.id === parseInt(prodId));

        if(!productRequested) {
            return res.status(404).send({status: "error", error: "product not found"});
        };

        const paymentInfo = {
            amount : productRequested.price,
            currency: 'usd',
        }

        const result = await createPaymentIntent(paymentInfo);
        res.status(200).send({status: "Success", payload: result});
    } catch (e) {
        console.log("Error - payment-intenet: ", e);
        res.status(500).send("Internal Error");
    }
};

export {
    carrito
}