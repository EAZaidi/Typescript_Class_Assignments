import chalk from "chalk";
function checkEvenOdd(num) {
    if (num % 2 == 0) {
        return (chalk.bold.greenBright(`${num} is an even number.`));
    }
    else {
        return (chalk.bold.blueBright(`${num} is an odd number.`));
    }
}
// Usage
let num1 = 7;
let num2 = 2;
console.log(checkEvenOdd(num1));
console.log(checkEvenOdd(num2));
