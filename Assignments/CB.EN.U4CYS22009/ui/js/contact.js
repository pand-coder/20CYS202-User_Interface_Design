document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var messageInput = document.getElementById("message").value;

    // Perform validation and submit form logic here

    // Display success message
    var successMessage = document.createElement("div");
    successMessage.classList.add("success-message");
    successMessage.textContent = "Your message has been sent successfully!";
    document.getElementById("contactForm").appendChild(successMessage);

    // Reset form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });