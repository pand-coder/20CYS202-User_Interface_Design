const navE1=document.querySelector('.nav-scroll');
window.addEventListener('scroll',()=>{
if(window.scrollY>50){
    navE1.classList.add('nav-scroll');
}else{
    navE1.classList.remove('nav-scroll');
}
});
const menuHamburger = document.querySelector(".menu-hamburger")
    const navLinks = document.querySelector(".nav-links")

    menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
    })
    

    function validateForm(event){
        event.preventDefault();
    
        var firstName= document.getElementById('ijowk-6').value;
        var lastName = document.getElementById('indfi-4').value;
        var email = document.getElementById('ipmgh-6').value;
        var phone = document.getElementById('imgis-5').value;
        var message = document.getElementById('i5vyy-6').value;
        var nameRegex= /^[A-Za-z]+$/;
        var emailRegex = /^\S+@\S+\.\S+$/;
        var phoneRegex = /^\d{10}$/;
        if(!nameRegex.test(firstName)){
            alert('Please enter a valid first name.');
            return;
        }
        if (!nameRegex.test(lastName)) {
            alert('Please enter a valid last name.');
            return;
        }
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number (10 digits only).');
            return;
        }
        if (message.trim() === '') {
            alert('Please enter a message.');
            return;
        }
        window.location.href ="submit1.html";
        
    }