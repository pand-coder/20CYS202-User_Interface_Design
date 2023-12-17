const scriptURL = 'https://script.google.com/macros/s/AKfycbzq0Y8zjROJe66SHKHfUF5wAyhjzSGojcvae-WeYYnyWRVyZJoFrC98CRBUDlXqydBmSQ/exec';
const form = document.forms['submit-to-google-sheet'];
const success = document.getElementById('success');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (validateForm()) {
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        success.innerHTML = "Sign-up successful!";
        // Redirect to the desired page after successful submission
        goToAnotherPage2();
      })
      .catch(error => console.error('Error!', error.message));
  }
});

function validateForm() {
  var usernameInput = document.getElementById("username").value;
  var emailInput = document.getElementById("email").value;
  var passwordInput = document.getElementById("password").value;
  var usernameRegex = /^[a-zA-Z]+$/;
  var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  var emailRegex = /^\S+@\S+\.\S+$/;

  if (!usernameRegex.test(usernameInput)) {
    alert("Username must contain only alphabetic characters.");
    return false;
  }

  if (!emailRegex.test(emailInput)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!passwordRegex.test(passwordInput)) {
    alert("Password must contain at least one letter, one number, and one special character.");
    return false;
  }

  return true;
}

function goToAnotherPage() {
  // Redirect to the desired page
  window.location.href = "../../html/login.html";
}

function goToAnotherPage2() {
  // Redirect to the desired page
  window.location.href = "../index.html";
}
