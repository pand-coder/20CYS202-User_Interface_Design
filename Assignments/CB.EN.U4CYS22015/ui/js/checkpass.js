function checkPass(){
    var pass1 = document.getElementById('password1');
    var pass2 = document.getElementById('password2');
    var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";


    if(pass1.length > 7){
        pass1.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Character number ok!"
    }
    else{
        pass1.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " You have to enter at least 8 digit!"
    }
    if(pass1.value == pass2.value){
        pass2.style.backgroundColor = goodColor;
        pass1.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords matched!"
    }
    else{
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " These passwords don't match"
    }
    
}
