function validateForm() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;
    var usernameRegex = /^[a-zA-Z]+$/;
    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    if (!usernameRegex.test(usernameInput)) {
      alert("Username must contain only alphabetic characters.");
      return false;
    }

    if (!passwordRegex.test(passwordInput)) {
      alert("Password must contain at least one letter, one number, and one special character.");
      return false;
    }

    if (passwordInput.length < 8) {
      alert("Your password must have a minimum length of 8 characters.");
      return false;
    }

    return true;
  }
  function goToAnotherPage() 
  {
  // Redirect to the desired page
  window.location.href = "../html/forgot.html";
}
function goToAnotherPage1() 
  {
  // Redirect to the desired page
  window.location.href ="../html/signup1.html";
}
function goToAnotherPage2()
{
  window.location.href="../ui/index.html";
}
