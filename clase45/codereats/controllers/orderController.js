import * as orderService from '../services/orders.services.js';
import * as userService from '../services/users.services.js';
import * as businessService from '../services/business.services.js';
import log from '../config/logger.js';

const getAllOrdes = async (req, res) => {
    try {
        const result = await orderService.getAll();
        res.status(200).send(result);
    } catch (e) {
        log.error("Error: ", e);
        res.status(500).send("Error interno!");
    }
}

const getorderById = async (req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).send("Id es mandatorio!");
    }

    try {
        const result = await orderService.getorderById(id);
        res.status(200).send(result);
    } catch (e) {
        log.error("Error: ", e);
        res.status(500).send("Error interno!");
    }
}

const createOrder = async(req, res) => {
    const { userId, businessId, product} = req.body;

    const resultBusiness = await businessService.getBusinessById(businessId);

    try {
        let actualOrders = resultBusiness.products.filter( pr => product.includes(pr.id));

        if(!actualOrders) {
            return res.status(400).send("Algun producto no corresponde!");
        }

        const sum = actualOrders.reduce( (acc, prev) => {
            acc += prev.price;
            return acc;
        }, 0);

        const orderNumber = Date.now() + Math.floor(Math.random() * 10000 + 1);


        let newOrder = {
            nombre: orderNumber,
            businessId,
            userId,
            status: "pending",
            products: actualOrders.map(pr => pr.id),
            totalPrice: sum
        };

        log.info(newOrder);
        const orderResult = await orderService.create(newOrder);

        await userService.updateOrderByUserId(userId, orderResult.id);
        res.status(200).send({status: "Success", orderResult});
    } catch (e) {
        log.error("error - create Order", e);
        res.status(500).send("error al crear la orden");
    }
};

// const resolveORder = async(req, res) => {
//     try {
//         const { resolve } = req.query;
//         const { id } = req.params;

//         await order.updateOrderById(id, resolve);
//         res.status(200).send({status: "Success", result: "Order resolved"});
//     } catch (e) {
//         console.log("Error - resolve Order");
//         res.status(500).send("Error al actualizar la orden");
//     }
// }

export {
    getAllOrdes,
    getorderById,
    createOrder
    // resolveORder
}