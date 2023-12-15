let user;
let otp;

async function get_otp(){
    alert('Sending OTP please wait!');
    user = document.getElementById('username').value;
    const response = await fetch(`/sendOTP/${user}`);
    const data = await response.json();

    if (data.success === true) {
        alert('OTP sent successfully');
        otp = data.otp;
        document.getElementById('username').value = '';
        document.getElementById('user').style.display = 'none';
        document.getElementById('otp').style.display = 'block';
    }

    else{
        alert('Something Went Wrong!');
    }
}

function check_otp(){
    const otpvalue = document.getElementById('otp_value').value;
    if (otpvalue == otp){
        document.getElementById('new-password').value = '';
        document.getElementById('otp').style.display = 'none';
        document.getElementById('change').style.display = 'block';
    }else{
        alert('Wrong OTP!!');
    }
}

function change_password(){
    const passwd = document.getElementById('new-password').value;
    const new_password = document.getElementById('reenter-password').value;

    if (passwd === new_password){
        var endpoint = '/forgotPassword';

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: user, new_password: new_password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Password Changes Successfully');
                window.location.href = '/';
            } else {
                alert('Authentication failed. Please check your credentials.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }else{
        alert('Passwords Must Match');
    }
}

function togglepasswd() {
    var x = document.getElementById("new-password");
    var y = document.getElementById("reenter-password");
    if (x.type === "password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
}