document.getElementById('bookingForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const from = document.getElementById('from').value;
      const to = document.getElementById('to').value;
      const date = document.getElementById('date').value;
      const passengerName = document.getElementById('passengerName').value;
      const age = document.getElementById('age').value;
      const passengers = document.getElementById('passengers').value;
      
      const confirmationMessage = `Train booked from ${from} to ${to} on ${date} for ${passengers} passengers. Passenger Name: ${passengerName}, Age: ${age}.`;
      document.getElementById('confirmation').innerText = confirmationMessage;
    });
  