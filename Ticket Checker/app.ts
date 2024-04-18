// Ticket Checker Assignment using nested if-else statements.

function checkAge(age: number) {

if(age < 5){
    console.log(`Age ${age}: You are a Toddler, Your Ticket is free. Have fun!!!`);
} 
else if(age >= 5 && age < 18){
    console.log(`Age ${age}: You are a Child, Your Ticket is Rs. 50. Have fun!!!`);
}
else if(age >= 18 && age < 60){
    console.log(`Age ${age}: You are an Adult, Your Ticket is Rs. 100. Have fun!!!`);
}
else{
    console.log(`Age ${age}: You are a Senior Citizen, Your Ticket is free. Have fun!!!`);
    }
}

// You can check multiple ages at once:
checkAge(4);
checkAge(17);
checkAge(59);
checkAge(65);

