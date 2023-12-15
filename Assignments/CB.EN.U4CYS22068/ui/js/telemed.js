function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunctionx() {
  document.getElementById("myDropdownx").classList.toggle("show");
}

function myFunctiony() {
  document.getElementById("myDropdownx").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function closeDropdown() {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var dropdownsx = document.getElementsByClassName("dropdown-content_abt");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
  for (i = 0; i < dropdownsx.length; i++) {
    var openDropdown = dropdownsx[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }  
}

function closeDropdownx() {
  var dropdowns = document.getElementsByClassName("dropdown-content_abt");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}

function submitForm() {
  document.getElementById("successMessage").style.display = "block";
  event.preventDefault();  
}