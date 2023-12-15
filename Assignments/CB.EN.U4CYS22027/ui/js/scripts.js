document.addEventListener('DOMContentLoaded', function () {
    var heroSection = document.querySelector('.hero');

    heroSection.addEventListener('mouseover', function () {
      heroSection.style.backgroundColor = '#0c3a6f'; // Change to your desired color
    });

    heroSection.addEventListener('mouseout', function () {
      heroSection.style.backgroundColor = ''; // Reset to the original color
    });
  });