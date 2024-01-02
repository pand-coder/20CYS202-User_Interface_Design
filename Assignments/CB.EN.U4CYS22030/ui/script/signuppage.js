        document.getElementById('signupForm').addEventListener('submit', function (event) {
            event.preventDefault();
            if (validateSignUp()) {
                
                window.location.href = '../html/signinpage.html';
            }
        });

        function validateSignUp() {

            var username = document.getElementById('username').value;
            
            var age = document.getElementById('age').value;
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmPassword').value;

            if (!username  || !age || !password || !confirmPassword) {
                alert('Please fill out all fields.');
                return false;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return false;
            }

        

            return true;
        }