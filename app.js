console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 != 0) {
//     console.log(`${i} is odd`);
//   }
// }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let a = 0; a <= 100; a++) {
  if (a % 3 == 0 && a % 5 == 0) {
    console.log(`${a}: FIZZBUZZ`);
  } else if (a % 3 == 0) {
    console.log(`${a}: FIZZ`);
  } else if (a % 5 == 0) {
    console.log(`${a}: BUZZ`);
  }
}
