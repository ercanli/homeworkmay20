const operations = {
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
  '%': (a, b) => a % b
};

// Write a function `evaluate` that uses the functions in the above `operations` variable to return the expected results.
// ...

function evaluate(a, y, b) {
  if (y == '+') return operations['+'](a, b);
  else if (y == '*') return operations['*'](a, b);
  else if (y == '%') return operations['%'](a, b);
}

// Expected output: 6
console.log(evaluate(4, '+', 2));

// Expected output: 8
console.log(evaluate(4, '*', 2));

// Expected output: 1
console.log(evaluate(9, '%', 4));

//my earlier steps below
// i was able to write a working code but it was not really
// using the given functions
// i looked up how to use functions from outside scope
// and got a hint from vincent imn using the [] operators

//   else if ()
//   {((y = '*') return x * z);
//   else if ((y = '%')) ;
//   return x % z);
// }

// if the 2nd parameter of the function is a + operator
// 1st parameter + 2nd parameter
//
// else if the 2nd parameter of the function is a * operator
// 1st parameter * 2nd parameter
//
// else if the 2nd parameter of the function is a % operator
// 1st parameter % 2nd parameter
