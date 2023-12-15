function togglepasswd() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function check() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var passwd = document.getElementById('password');

  var endpoint = '/authenticate';

  fetch(endpoint, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password }),
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          if (data.advisor === 1) {
              passwd.value = '';
              window.location.href = '/advisor';
          } else {
              passwd.value = '';
              window.location.href = '/home';
          }
      } else {
          alert('Authentication failed. Please check your credentials.');
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });
}

async function submitForm(){
    var myform = document.getElementById('login');
    if (myform.checkValidity()) {
        check();
    } else {
        alert('Please fill in all required fields.');
    }
}
