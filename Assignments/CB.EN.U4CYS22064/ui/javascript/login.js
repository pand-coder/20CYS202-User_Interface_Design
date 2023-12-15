document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
  
    setTimeout(function () {
      container.classList.add('active');
    }, 100);
  
    document.querySelector('#loginForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.querySelector('#username').value;
      const password = document.querySelector('#password').value;
  
      if (username === 'Kishan' && password === 'Kishan_2004') {
        alert('Login successful!');
        window.location.href = '../ui/html/dashboard.html'; 
      } else if (username === 'Vamsi' && password === 'Vamsi_2004') {
        alert('Login successful!');
        window.location.href = '../ui/html/dashboard.html';
      } else {
        alert('Invalid username');
      }
    });
  });
  