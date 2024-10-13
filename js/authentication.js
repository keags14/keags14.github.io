// Define the password
const password = "the password"; // Replace with your desired password

// Prompt the user for the password
const enteredPassword = prompt("Please enter the password to access this page:");

// Check if the entered password is correct
if (enteredPassword === password) {
    alert("Password is correct. You can access the page.");
} else {
    alert("Incorrect password. Access denied.");
    window.location.href = "index.html"; // Redirect to an unauthorized page
}