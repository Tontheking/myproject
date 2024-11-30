// Sample credentials (for demo purposes)
const correctPassword = "123";

// Get the form and error message elements
const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered credentials are correct
    if (username === correctUsername && password === correctPassword) {
        // If credentials are correct, redirect to a welcome page (or another page)
        window.location.href = "welcome.html"; // Example: redirect to a welcome page
    } else {
        // If credentials are incorrect, show the error message
        errorMessage.style.display = "block";

        // Optionally, clear the password field
        document.getElementById('password').value = "";
    }
});
