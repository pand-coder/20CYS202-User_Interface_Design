function saveUserData() {
    // Get user input
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Check if the terms checkbox is checked
    var termsCheckbox = document.getElementById('terms');
    if (!termsCheckbox.checked) {
        alert('Please read and accept the Terms and Conditions.');
        return;
    }

    // Create an object to store user data
    var userData = {
        username: username,
        email: email,
        password: password
    };

    // Convert the object to a JSON string
    var userDataString = JSON.stringify(userData);

    // Save user data to localStorage
    localStorage.setItem('userData', userDataString);

    // Redirect to the sign-in page
    window.location.href = "../HTML/Login.html";
}
