function checkSignUp() {
    // Retrieve user data from localStorage
    var userDataString = localStorage.getItem('userData');

    // Check if userData exists
    if (!userDataString) {
        alert('You need to sign up first!');
        return false; // Prevent form submission
    }

    // Parse user data from JSON
    var userData = JSON.parse(userDataString);

    // Get the entered username and password from the form
    var enteredUsername = document.getElementById('username').value;
    var enteredPassword = document.getElementById('password').value;

    // Check if the entered username and password match the stored user data
    if (enteredUsername === userData.username && enteredPassword === userData.password) {
        // Redirect to the next HTML page
        window.location.href = "After_Login_Home.html";
    } else {
        alert('Incorrect username or password!');
    }

    // Prevent form submission (optional, as the page will be redirected or an alert will be shown)
    return false;
}
