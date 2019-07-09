const _ = require("lodash");

const numbers = [23, 4, 55, 23, 565, 77, 3];

_.each(numbers, (number, i) => {
  console.log(number);
});
