import Stripe from 'stripe';


const stripe = new Stripe('sk_test_51NoCQxIDKpsdi6dqOZsoHWV5OZBBMV1ndoVVoL1xzGF9xINuTgLQWYzlRYWTAPaqqHGwgVm2O5D4fW1z7T3KIr1x00h1z07nuJ')


const createPaymentIntent = async (data) => await stripe.paymentIntents.create(data)

export {
    createPaymentIntent
}