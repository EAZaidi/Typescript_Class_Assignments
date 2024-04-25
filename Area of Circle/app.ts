import chalk from "chalk";

function areaofCircle(r: number): number{
    const PI= 3.14;
    let area = PI * r * r;
    return area
}

let r = 4;
console.log(chalk.greenBright(`The area of the circle is: ${areaofCircle(r)}`));
