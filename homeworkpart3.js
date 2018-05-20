const names = ['George', 'Richard', 'Abraham', 'Donald'];
const ages = {
  George: 55,
  Richard: 86,
  Abraham: 50,
  Donald: 65
};
const addresses = {
  George: 'Fleet street, 121b',
  Richard: 'Bermuda drive, 33',
  Abraham: 'Cincinatti Av., 22a'
};
const willDeliverPizza = {
  'Fleet street': true,
  'Bermuda drive': false,
  'Cincinatti Av.': true
};

names = names.concat(ages);

// var map = function(array, callback) {
//   var userData = [];
//
//   ages.forEach(function(element, index, array) {
//     userData.push(callback(element));
//   });
//
//   return userData;
// };
//
// var address_names = map(addresses, function(address) {
//   return address.name;
// });

// https://stackoverflow.com/questions/32354201/how-to-combine-two-arrays-using-map-filter-reduce
// this is (one of the pages) I was trying to work with to at least get it [artially working
//and then use a reduce function?]

// var userData = names.map(function(name) {
//   var names = addresses.filter(function(address) {
//     return name === address;
//   })[0];
//   return name.name + ages.name + address.name;
// });
//
// console.log(userData);

// var userData = ages.concat(addresses);

// $.extend(true, ages, addresses);
//
// console.log(JSON.stringify(ages));

// //this is the page I got this info from:   https://gomakethings.com/merging-objects-with-vanilla-javascript/
// //createa new object
// var userData = {};
// // loop thru names
// function aggregate(ages, addresses) {
//   for (var key in ages) {
//     if (ages.hasOwnProperty(key)) addresses[key] = ages[key];
//   }
//   return addresses;
// }

// console.log(userData);
//push each value from 'obj1' into 'extended'
//     userData[prop] = names[prop1];
//   }
// }
//
// //loop thru ages
// for )var prop2 in ages

// Implement the `aggregate` function so that it returns the expected output.
// Use the defined variables names, ages, addresses, and willDeliverPizza.
// !! Notice the object in the expected output has the keys: userData, highestAge, and lowestAge
// ...

// Expected output:
//
// { userData:
//     [ { name: 'George',
//         age: 55,
//         address: 'Fleet street, 121b',
//         willDeliverPizza: true },
//       { name: 'Richard',
//         age: 86,
//         address: 'Bermuda drive, 33',
//         willDeliverPizza: false },
//       { name: 'Abraham',
//         age: 50,
//         address: 'Cincinatti Av., 22a',
//         willDeliverPizza: true },
//       { name: 'Donald',
//         age: 65,
//         address: undefined,
//         willDeliverPizza: 'Unknown' } ],
//    highestAge: 86,
//    lowestAge: 50 }
//

//merge arrays objects, object properties need to be checked
