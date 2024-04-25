// Marks Sheet using arrow function
var marksheet = function (marks) {
    if (marks >= 90 && marks <= 100) {
        console.log("Pass \tYour grade is A+");
    }
    else if (marks >= 70 && marks < 80) {
        console.log("Pass \tYour grade is A");
    }
    else if (marks >= 60 && marks < 70) {
        console.log("Pass \tYour grade is B");
    }
    else if (marks >= 50 && marks < 60) {
        console.log("Pass \tYour grade is C");
    }
    else if (marks >= 40 && marks < 50) {
        console.log("Pass \tYour grade is D");
    }
    else {
        console.log("Fail");
    }
};
marksheet(91);
marksheet(79);
marksheet(65);
marksheet(50);
marksheet(42);
marksheet(39);
