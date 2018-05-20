const input1 = [1, 2, 3, 4];
const input2 = ['a', 'a', 1, 1, 7, 0, 1];

function countFrequency(input) {
  output = {};
  for (var i = 0; i < input.length; i++) {
    //  console.log(!output[input[i]]);
    //  console.log((output[input[i]] = 0));
    //this part I found on stackoverflow and understood it almost 100% by console logging
    //still not sure if i can reproduce such a brief version of the code but I will study further.
    if (!output[input[i]]) output[input[i]] = 0;
    ++output[input[i]];
    //console.log(++output[input[i]]);
  }
  return output;
}
console.log(countFrequency(input1));
console.log(countFrequency(input2));

//below are my earlier steps:

// const input1 = [1, 2, 3, 4];
// const input2 = ['a', 'a', 1, 1, 7, 0, 1];
//
//
// output = {};
// for (var i = 0; i < input1.length; i++) {
//   console.log()
//   if (!output[input1[i]]) output[input1[i]] = 0;
//
//   ++output[input1[i]];
// }
// console.log(output);

// const input1 = [1, 2, 3, 4];
// const input2 = ['a', 'a', 1, 1, 7, 0, 1];
//
// // function countFrequency(input){
// //
// // }
// //   console.log(arguments);
// //   return output;
//
//
//   for (var i = 0; i < input1.length; i++) {
//     output = if (!output[input1[i]]) output[input1[i]] = 0;
//     console.log(check)
//     ++output[input1[i]];
//   }
// };
//console.log(output);
// console.log(countFrequency(input1));

//WORKING VERSION ABOVE => WRITE WITH ARROW FUNCTION AND .THIS?

// make new newarray and sort it

//AND SORT interval
//
// function countFrequency(input1) {
// console.log(output{});
// for each character of the array

// push it to newarray's next index newkey
//input1.push(newarray1[i]);
// compare against/count all array positions

// increment newvalue ++1 when found

// push newvalue  to newarrays next index value

// sort the newarray
//newarray.sort();
//}
//const input1 = [1, 2, 3, 4]
//const input2 = ["a", "a", 1, 1, 7, 0, 1]

// Write a function `countFrequency` that makes the following lines print the expected output.
// ...

// Expected output:
// { '1': 1, '2': 1, '3': 1, '4': 1 }
//console.log(countFrequency(input1));

// Expected output:
// { '0': 1, '1': 3, '7': 1, a: 2 }
//console.log(countFrequency(input2));
//
