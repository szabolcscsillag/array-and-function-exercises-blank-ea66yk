/*
write a function that has 3 arguments and returns the average of its arguments
Sample input: 1, 2, 6
       output: 3
 */

function avg(a, b, c) {
  return (a + b + c) / 3;
}

console.log(avg(2, 4, 6, 8));
console.log(avg(1, 2, 6));

/*
write a function that has an undefined number arguments and returns the average of its arguments
Sample input: 2, 4, 6, 8
      output: 6
      input: 1, 2, 6
      output: 3
 */
function avg2() {
  var avg = 0;

  for (var i = 0; i < arguments.length; i++) {
    avg += arguments[i];
  }
  return avg / arguments.length;
}

console.log(avg2(1, 2));
console.log(avg2(2, 4, 6, 8));
console.log(avg2(1, 2, 6));

/*
Write a function that calculates the sum of it's first 2 arguments and the average of the rest of it' arguments
    sample input: 1, 2, 3, 4, 5
    output: 7 (1 + 2 + (3 + 4 + 5 ) / 3)
*/

function sumAvg() {
  var avg = 0;

  for (var i = 2; i < arguments.length; i++) {
    avg += arguments[i];
  }
  avg = avg / (arguments.length - 2);

  var sum = arguments[0] + arguments[1] + avg;

  return sum;
}

console.log(sumAvg(1, 2, 3, 4, 5));

/*
Write a function that returns a function that returns it's argument multiplied by 10
    sample input: - 
    output: a function
*/

function fMultiply10() {
  function func(toBeMultiplied) {
    return toBeMultiplied * 10;
  }
  return func;
}

//let func = fMultiply10();
//console.log(func(10));

//console.log(fMultiply10()(10))

/*
write a function that accepts an x argument and returns a function that returns it's argument multiplied by x
    sample input: 10
    output: a function
*/

function fMultiplyX(x) {
  return function func(toBeMultiplied) {
    return toBeMultiplied * x;
  };
}

//console.log(fMultiplyX(5)(10));

/* Write a function that calls the members of the below functions array, the return value of a function is the input parameter of the next function call 


sample input value: 30 
output: 64  -  ((30 * 10) + 20) / 5  

*/

const functions = [x => x * 10, x => x + 20, x => x / 5];

function compose(x) {
  for (var i = 0; i < functions.length; i++) {
    x = functions[i](x);
  }
  return x;
}

const result = compose(30);
console.log("res", result);
