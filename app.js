console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(`${i} is odd`);
  }
}

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

console.log("EXERCISE 3:\n==========\n");
console.log(`Exercise 1 with while loop`);

let i = 0;
while (i <= 100) {
  if (i % 2 != 0) {
    console.log(`${i} is odd`);
  }
  i++;
}

console.log(`Exercise 1 with do while loop`);
let j = 0;
do {
  if (j % 2 != 0) {
    console.log(`${j} is odd`);
  }

  j++;
} while (j <= 100);

console.log(`Exercise 2 with while loop`);

let k = 0;

while (k <= 100) {
  if (k % 3 == 0 && k % 5 == 0) {
    console.log(`${k}: FIZZBUZZ`);
  } else if (k % 3 == 0) {
    console.log(`${k}: FIZZ`);
  } else if (k % 5 == 0) {
    console.log(`${k}: BUZZ`);
  }

  k++;
}

console.log(`Exercise 2 with do while loop`);
let l = 0;

do {
  if (l % 3 == 0 && l % 5 == 0) {
    console.log(`${l}: FIZZBUZZ`);
  } else if (l % 3 == 0) {
    console.log(`${l}: FIZZ`);
  } else if (l % 5 == 0) {
    console.log(`${l}: BUZZ`);
  }

  l++;
} while (l <= 100);

console.log(`Exercise 4`);
let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

console.log(`The range is ${n} and the value is ${value}`);

function findTheValue() {
  for (let m = 0; m <= n; m++) {
    if (m === value) {
      console.log(`Found Value! The value is ${value}`);
      break;
    }

    //if m is at the last value and we haven't found the value yet .
    if (m === n) {
      console.log("Did not find value");
    }
  }
}

findTheValue();

console.log(`Exercise 5`);
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let range = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(`FizzDivisor: ${fizzDivisor}
BuzzDivisor: ${buzzDivisor}
Start: ${start}
Range: ${range} `);

for (let g = start; g <= range; g++) {
  if (g % fizzDivisor == 0 && g % buzzDivisor == 0) {
    console.log(`${g}: FIZZBUZZ`);
  } else if (g % fizzDivisor == 0) {
    console.log(`${g}: FIZZ`);
  } else if (g % buzzDivisor == 0) {
    console.log(`${g}:BUZZ`);
  }
}
