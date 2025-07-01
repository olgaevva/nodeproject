const os = require('os');
let res1 = os.platform();
const { getProducts } = require('./app');
console.log(res1);
/*function addNumber(num1, num2) {
    let res = num1 + num2;
    console.log(res);
}*/

console.log(getProducts());
console.log('End');
