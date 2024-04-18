// Ticket Checker Assignment using nested if-else statements.
function checkAge(age) {
    if (age < 5) {
        console.log("Age ".concat(age, ": You are a Toddler, Your Ticket is free. Have fun!!!"));
    }
    else if (age >= 5 && age < 18) {
        console.log("Age ".concat(age, ": You are a Child, Your Ticket is Rs. 50. Have fun!!!"));
    }
    else if (age >= 18 && age < 60) {
        console.log("Age ".concat(age, ": You are an Adult, Your Ticket is Rs. 100. Have fun!!!"));
    }
    else {
        console.log("Age ".concat(age, ": You are a Senior Citizen, Your Ticket is free. Have fun!!!"));
    }
}
// You can check multiple ages at once:
checkAge(4);
checkAge(17);
checkAge(59);
checkAge(65);
// ______________________________________________________________________________________
// // Define the ticket prices for each age group
// interface TicketPrices {
//     [key: string]: number;
//     toddler: number;
//     child: number;
//     adult: number;
//     seniorcitizen: number;
// }
// const TICKET_PRICES = {
//     'toddler': 0, // Free entry for toddlers
//     'child': 50, // Rs. 50 for child
//     'adult': 100, // Rs. 100 for adult
//     'seniorcitizen': 0 // Free entry for senior citizen
// };
// // Function to determine the age group
// function getAgeGroup(age: number): string {
//     if (age < 5) {
//         return 'toddler';
//     } else if (age < 18) {
//         return 'child';
//     } else if (age < 60) {
//         return 'adult';
//     } else {
//         return 'seniorcitizen';
//     }
// }
// // Function to get the ticket price for a given age
// function getTicketPrice(age: number): number {
//     const ageGroup = getAgeGroup(age);
//     return TICKET_PRICES[ageGroup as keyof typeof TICKET_PRICES];
// }
// // Test the function with an age
// const age: number = 5;
// const ticketPrice = getTicketPrice(age);
// console.log(`Your ticket price is Rs. ${ticketPrice}. Have fun!!!`);
