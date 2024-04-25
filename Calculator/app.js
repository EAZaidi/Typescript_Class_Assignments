// Simple Calculator using arrow function
var myCal = function (n1, n2, sign) {
    if (sign == "+") {
        console.log(n1 + n2);
    }
    else if (sign == "-") {
        console.log(n1 - n2);
    }
    else if (sign == "*") {
        console.log(n1 * n2);
    }
    else if (sign == "/") {
        console.log(n1 / n2);
    }
    else if (sign == "%") {
        console.log((n1 * 100) / n2);
    }
    else {
        console.log("Invalid sign");
    }
};
myCal(20, 5, "+");
myCal(5, 20, "-");
myCal(30, 2, "*");
myCal(3, 15, "/");
myCal(5, 5, "%");
