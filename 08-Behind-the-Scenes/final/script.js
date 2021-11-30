import add, { cart } from './shoppingCart.js';
add('pizza', 10);

const shoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCast = function (product, quantity) {
        cart.push({ product, quantity });
    };

    const orderStock = function (product, quantity) {
        console.log(`${quantity}`);
    };

    return {
        addToCast,
        cart,
        totalPrice,
        totalQuantity
    }
})