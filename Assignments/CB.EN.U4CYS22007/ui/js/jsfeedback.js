document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Perform your validation here
    let name = document.getElementById('name').value.trim();
    let age = document.getElementById('age').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let feedback = document.getElementById('feedback').value.trim();

   
    if (name === '' || age === '' || phone === '' || feedback === '') {
        alert('Please fill in all fields.');
        return;
    }

    
    if (isNaN(age) || isNaN(phone)) {
        alert('Age and phone number must be valid numbers.');
        return;
    }

    
    alert('Form submitted successfully!');
    location.reload();
    
});
