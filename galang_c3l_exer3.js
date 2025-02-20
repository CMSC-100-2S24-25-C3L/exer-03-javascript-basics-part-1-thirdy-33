// Function to check if the password that inputted is valid or not with the criteria from the exercise file is used to validate the password
function validatePassword(password1, password2) {
    if (password1 !== password2) return false; // Check if passwords match
    if (password1.length < 8) return false; // Check minimum length of the password which is atleast 8 characters
    
    let UpperCase = false;
    let LowerCase = false;
    let Number = false;
    
    // Function that loops around the password to check the specific criteria that is needed for the password
    // to be valid
    for (let char of password1) {
        if (char >= 'A' && char <= 'Z') UpperCase = true; // to check for the uppercase letter in the password
        if (char >= 'a' && char <= 'z') LowerCase = true; // to check for the lowercase letter in the password 
        if (char >= '0' && char <= '9') Number = true; // to check for the number used in the password
    }
    
    // If all are true, then the password is valid 
    // If not then return false for the password to be invalid
    return UpperCase && LowerCase && Number;
}

// Function to reverse a given password
function reversePassword(password) {
    let reversed = "";
    // Loop through the password characters in reverse order
    for (let i = password.length - 1; i >= 0; i--) {
        reversed += password[i];
    }
    return reversed; // Return the reversed password
}

// Function to store a password after validation 
function storePassword(name, password1, password2) {
    let isValid = validatePassword(password1, password2); // Validate the passwords
    let newpassword = isValid ? reversePassword(password1) : password1; // Reverse if the password inputted is valid, otherwise keep the password as is.
    return { name, newpassword }; // Return an object with the name and the final checked password.
}

// Example test cases
console.log(storePassword("John", "Pass1234", "Pass1234")); // {name: "John", newpassword:"4321ssaP"}
console.log(storePassword("John", "Pass123", "Pass12345")); // {name: "John", newpassword:"Pass123"}





