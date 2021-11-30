console.log('export module');

export const addToCart = function (product, price) {
    console.log(`${product} has ${price}`);
}

const totalProduct = 10;
const totalPrice = 100;

export { totalProduct, totalPrice };

export default function (product, price) {
    console.log(`${product} has ${price}`);
}