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
let n = 0;

do {
  if (n % 3 == 0 && n % 5 == 0) {
    console.log(`${n}: FIZZBUZZ`);
  } else if (n % 3 == 0) {
    console.log(`${n}: FIZZ`);
  } else if (n % 5 == 0) {
    console.log(`${n}: BUZZ`);
  }

  n++;
} while (n <= 100);
