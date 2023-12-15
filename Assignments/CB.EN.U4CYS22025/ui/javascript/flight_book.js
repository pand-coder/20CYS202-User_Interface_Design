 document.getElementById('bookingForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form values
      const from = document.getElementById('from').value;
      const to = document.getElementById('to').value;
      const date = document.getElementById('date').value;
      const passengerName = document.getElementById('passengerName').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const age = document.getElementById('age').value;
      const passengers = document.getElementById('passengers').value;
      
      // You can perform further actions here like sending data to a server or displaying a confirmation message
      const confirmationMessage = `Flight booked from ${from} to ${to} on ${date} for ${passengers} passengers. Passenger Name: ${passengerName}, Gender: ${gender}, Age: ${age}.`;
      document.getElementById('confirmation').innerText = confirmationMessage;
    });