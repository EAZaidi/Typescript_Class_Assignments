import chalk from "chalk";

function average(array: number[]): string {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let avg = sum / array.length;
    return (chalk.bold.blue(`The average of the array is: ${avg}`));
}

let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(average(numbers));  // Output will be: 4