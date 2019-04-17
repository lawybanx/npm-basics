const _ = require('lodash');

const numbers = [12,23,45,67,34,56];

_.each(numbers, function(number, i){
console.log(number);
});