function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var amount = document.getElementById("amount").value;
  
      if (fullName === "" || phoneNumber === "" || amount === "") {
        alert("All fields are required");
        return false;
      }

      if (isNaN(phoneNumber) || phoneNumber.length !== 10) {
        alert("Invalid phone number. Please enter a 10-digit number.");
        return false;
      }

      if (amount <= 0) {
		console.log("test");
        alert("Invalid amount. Please donate a positive amount.");
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



//function validateForm() {
     // var fullName = document.getElementById("fullName").value;
      //var phoneNumber = document.getElementById("phoneNumber").value;
      //var amount = document.getElementById("amount").value;

      //if (fullName === "" || phoneNumber === "" || amount === "") {
      //  alert("All fields are required");
       // return false;
      //}

      //if (isNaN(phoneNumber) || phoneNumber.length !== 10) {
       // alert("Invalid phone number. Please enter a 10-digit number.");
       // return false;
     // }

//      if (parseInt(amount) <= 0) {
  //      alert("Invalid amount. Please donate a positive amount.");
    //    return false;
      //}
//function redirectToThanks() {
  //  window.location.href = "thanks.html";
//}

//function submitForm() {
//if (validateForm()) {
  //redirectToThanks();
//}
  //  }