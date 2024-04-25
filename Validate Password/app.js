import chalk from "chalk";
function validatePassword(password) {
    // Check if password is at least 8 characters long
    if (password.length < 8) {
        return false;
    }
    // Check if password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    // Check if password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }
    // Check if password contains at least one digit
    if (!/\d/.test(password)) {
        return false;
    }
    // Check if password contains at least one special character
    if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
        return false;
    }
    // If all validation passed, return true
    return true;
}
// Example usage
const password = "IamEssa110!";
if (validatePassword(password)) {
    console.log(chalk.bold.greenBright("Password is valid."));
}
else {
    console.log(chalk.bold.redBright("Password is invalid."));
}
