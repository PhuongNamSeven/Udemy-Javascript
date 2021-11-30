import { addToCart, totalProduct as totalP, totalPrice as totalR } from './shoppingCart.js';

console.log('import module');
addToCart('pen', 20);
console.log(totalP, totalR);
import add from './shoppingCart.js';

add('car', 10);