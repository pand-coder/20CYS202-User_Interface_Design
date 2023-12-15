var slideIndex = 0;

 var slides,dots,timer;

var slideshow_images = ["./images/slideshowimage1.jpeg","./images/slideshowimage2.jpeg","./images/slideshowimage3.jpeg","./images/slideshowimage4.jpeg"];

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

let currentIndex = 0;
let ext = ''; 

function openPopup(imageSrc,a) {
  currentIndex = getImageIndex(imageSrc);
  ext = a;
  updatePopupContent();
  document.getElementById('imagePopup').style.display = 'block';
}

function closePopup() {
  document.getElementById('imagePopup').style.display = 'none';
}

function changeImage(offset) {
  currentIndex += offset;
  updatePopupContent();
}

function getImageIndex(imageSrc) {
  const images = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg', 'image5.jpeg', 'image6.jpeg', 'image7.jpeg', 'image8.jpeg'];
  return images.indexOf(imageSrc);
}

function updatePopupContent() {
  const images = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg', 'image5.jpeg', 'image6.jpeg', 'image7.jpeg', 'image8.jpeg'];
  const popupImage = document.getElementById('popupImage');
  currentIndex = (currentIndex + images.length) % images.length; // Ensure the index is within bounds
  console.log(ext + images[currentIndex])
  popupImage.src = ext + images[currentIndex];
}
