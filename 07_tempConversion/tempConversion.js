const round = (num, precision) => {
  const decimal = 10**precision;
  return Math.round((num * decimal)) / decimal;
}

const ftoc = function(farenheit) {
  let celcius = (5/9) * (farenheit - 32);
  return round(celcius, 1);
};

const ctof = function(celcius) {
  farenheit = (1.8 * celcius) + 32;
  return round(farenheit, 1);
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
