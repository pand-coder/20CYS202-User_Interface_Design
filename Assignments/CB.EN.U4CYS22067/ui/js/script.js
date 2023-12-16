function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
  
    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Invalid phone number. Please enter a 10-digit number.");
      return false;
    }
  
    if (!email.includes("@")) {
      alert("Invalid email address. Please enter a valid email.");
      return false;
    }
  
    return true;
  }
function redirectToThanks() {
    window.location.href = "thanks.html";
}

function submitForm() {
if (validateForm()) {
  redirectToThanks();
}
}  