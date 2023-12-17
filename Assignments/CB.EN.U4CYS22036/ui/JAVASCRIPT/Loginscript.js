document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for this example

    // Get form values
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example validation (you can add your custom validation logic)
    if (fullName && email && username && password) {
      alert('Form submitted successfully!');
      // Here you can send form data to the server using fetch or AJAX
    } else {
      alert('Please fill in all fields');
    }
  });
});
