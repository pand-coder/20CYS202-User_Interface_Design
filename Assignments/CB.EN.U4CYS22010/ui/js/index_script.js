var slideIndex = 0;

var slides,dots,timer;

var slideshow_images = ["./images/slideshowimage1.jpg","./images/slideshowimage2.jpg","./images/slideshowimage3.jpg","./images/slideshowimage4.jpg"];

function changeBack(index) {
 slides = document.getElementById("slides");
 slides.style.backgroundImage = 'url("' + slideshow_images[index-1] + '")';
}

var slideIndex = 0;
var slides = document.getElementById("slides");

function fadeOut(element, callback) {
   var brightness = 1;
   var fadeInterval = setInterval(function () {
       if (brightness <= 0.1) {
           clearInterval(fadeInterval);
           element.style.brightness = 0;
           callback();
       }
       element.style.filter = "brightness(" + brightness + ")";
       brightness -= 0.01;
   }, 10);
}

function fadeIn(element, callback) {
   var brightness = 0;
   var fadeInterval = setInterval(function () {
       if (brightness >= 0.9) {
           clearInterval(fadeInterval);
           element.style.brightness = 1;
           callback();
       }
       element.style.filter = "brightness(" + brightness + ")";
       brightness += 0.01;
   }, 10);
}

function fadeAndChange(index) {
   fadeOut(slides, function () {
       changeBack(index);
       fadeIn(slides, function () {
       });
   });
}



function showSlides() {
   var i;
   slides = document.getElementById("slides");
   dots = document.getElementsByClassName("dot");
   slideIndex++;
   if (slideIndex> dots.length) {slideIndex = 1}    
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
   }
   fadeAndChange(slideIndex);
   dots[slideIndex-1].className += " active";
   timer = setTimeout(showSlides, 4000); 
}

showSlides();

function plusSlides(position) {
   clearTimeout(timer);
   slideIndex +=position;
   if (slideIndex> dots.length) {slideIndex = 1}
   else if(slideIndex<1){slideIndex = dots.length}
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
   }
   slides.style.backgroundImage = "url('" + slideshow_images[slideIndex-1] + "')";  
   dots[slideIndex-1].className += " active";
   timer = setTimeout(showSlides, 4000);
}

function currentSlide(index) {
   clearTimeout(timer);
   if (index> dots.length) {index = 1}
   else if(index<1){index = dots.length}
   slideIndex = index;
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
   }
   slides.style.backgroundImage = "url('" + slideshow_images[slideIndex-1] + "')";
   dots[index-1].className += " active";
   timer = setTimeout(showSlides, 4000);
}

function myFunction() {
 var x = document.getElementById("myTopnav");
 if (x.className === "topnav") {
   x.className += " responsive";
 } else {
   x.className = "topnav";
 }
}