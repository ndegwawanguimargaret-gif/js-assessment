// 1. Print numbers from 1 to 20
console.log("Numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2. Print even numbers from 1 to 20
console.log("Even numbers:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. Print odd numbers from 1 to 20
console.log("Odd numbers:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 4. Calculate the sum of numbers from 1 to 20
let sum = 0;

for (let i = 1; i <= 20; i++) {
    sum += i;
}

console.log("Sum of numbers:", sum);

// 5. Print numbers from 20 down to 1
console.log("Numbers from 20 down to 1:");

for (let i = 20; i >= 1; i--) {
    console.log(i);
}