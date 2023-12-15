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