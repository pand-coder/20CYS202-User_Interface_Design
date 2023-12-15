window.onload = function() {
    document.getElementById("myVideo").play();
  };
 
  
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", function() {
    var animatedText = document.getElementById("animatedText");

    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;
        var elementPosition = animatedText.offsetTop;

        if (scrollPosition > elementPosition - window.innerHeight + 100) {
            animatedText.classList.add("slide-up");
        }
    });
});