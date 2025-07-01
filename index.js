const os = require('os');
let res1 = os.platform();
const { getProducts } = require('./app');
console.log(res1);
//console.log(getProducts());

const simple = require('./simple');
let res3 = simple.addNumber(2,5);
console.log(res3);
console.log('End');
