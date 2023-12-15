let user;

function getCookie(name) {
    const value = `; ${document.cookie}`;
    console.log(value);
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

let user_name

function get_user() {
    var endpoint = '/get_user';

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: user}),
    })
    .then(response => response.json())
    .then(data => {
        user_name = data.username
        document.getElementById('user').innerText = user_name;
    })
}

document.addEventListener('DOMContentLoaded', function() {
    user = getCookie('username');
    get_user();
});

function toggleDropdown(container) {
    container.classList.toggle('active');
}

function togglepasswd() {
    var x = document.getElementById("current-password");
    var y = document.getElementById("new-password");
    var z = document.getElementById("reenter-password");
    if (x.type === "password") {
      x.type = "text";
      y.type = "text";
      z.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
      z.type = "password";
    }
}

function submitForm(){
    var myform = document.getElementById('changePassword');
    if (myform.checkValidity()) {
        var password = document.getElementById('current-password').value;
        var new_password = document.getElementById('new-password').value;
        var re_password = document.getElementById('reenter-password').value;

        if(new_password === re_password){
            var endpoint = '/change_Password';

            fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user: user, password: password, new_password: new_password }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Password Changed Successfully')
                    myform.reset();
                } else {
                    alert('Something went wrong, Check your current password');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    } else {
        alert('Please fill in all required fields.');
    }
}

function logout() {
    fetch('/logout', {
        method: 'GET'
    })
    .then(() => {
        window.location.href = '/';
    })
    .catch(error => {
        console.error('Logout error:', error);
    });
}