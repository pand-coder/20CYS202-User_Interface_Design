        document.getElementById('signinForm').addEventListener('submit', function (event) {
            event.preventDefault();
            if (validateSignIn()) {
                alert('Login successful!');
                
                window.location.href = '../html/main.html';
            } else {
                alert('Login failed. Please check your username and password.');
            }
        });

        function validateSignIn() {
            
            var username = document.getElementById('signinUsername').value;
            var password = document.getElementById('signinPassword').value;

            
            var validUsername = 'hemanth_2503';
            var validPassword = 'abc@123';

            
            if (username === validUsername && password === validPassword) {
                return true;
            } else {
                return true;
            }
        }