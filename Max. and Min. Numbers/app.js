import chalk from "chalk";
function maxMin(array) {
    let max = array[0];
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    return (chalk.visible.cyanBright(`The maximum number in the array is: ${max} \nThe minimum number in the array is: ${min}\n`));
}
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(maxMin(numbers));
