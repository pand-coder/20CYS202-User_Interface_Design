// Open the side pop
function openSidePop() {
    document.getElementById('side-pop').style.left = '0';
  }
  
  // Close the side pop
  function closeSidePop() {
    document.getElementById('side-pop').style.left = '-100%';
  }
  
  // Add a click event listener to the 'Get in Touch' button
  document.getElementById('get-in-touch-button').addEventListener('click', openSidePop);
  
  // Add a click event listener to the close button inside the side pop
  document.getElementById('side-pop-close-button').addEventListener('click', closeSidePop);

