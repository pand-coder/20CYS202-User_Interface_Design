const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', checkData);

function checkData(event) {
  event.preventDefault();
  const email = document.querySelector("[name='email']").value;
  const password = document.querySelector("[name='password']").value;

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  if (!isValidPassword(password)) {
    alert("Please enter a valid password (at least 6 characters)");
    return false;
  }

  // Assuming all inputs are valid, proceed to login
  localStorage.setItem("sessionData", JSON.stringify({
    Name: "Your Name", // You can replace this with the actual user name if available
    Email: email,
    isLoggedIn: true,
  }));

  alert("Login Successful");
  window.location.href = 'index.html';
  return false;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  // You can customize the password validation logic based on your requirements
  return password.length >= 6;
}

const check = document.querySelector('#check');
const checkMsg = document.querySelector('#checkMsg');

const name = document.querySelector('.name');
const psd = document.querySelector('.psd');
const msg = document.querySelector('#msg');

const main = document.querySelector('.main');

const signupOption = document.getElementById('signup-option');

signupOption.addEventListener('click', function() {
  window.open('signup.html', '_self');
});

let img = ["https://variety.com/wp-content/uploads/2020/05/155485_dsc_1739_20190909102832658_revised_bw_l-e1589787393215.jpg", "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/itb3hCN.NoBM/v1/-1x-1.jpg", "https://ichef.bbci.co.uk/news/976/cpsprodpb/E84C/production/_128286495_e6bee2b51bfe8d37d9bb1a27b0600745b67a3a19.jpg"];

let index = 0;
let imglength = img.length;

//slider 
setInterval(function() {
  var index1 = img[index];
  index++;

  if (index >= imglength) {
    index = 0;
  }

  main.style.backgroundImage = `url(${index1})`;
}, 4000);

var a = 1;

check.addEventListener('click', () => {
  load();
});

const load = () => {
  if (a == 1) {
    checkMsg.style.color = "#fff";
    a = 0;
  } else {
    checkMsg.style.color = "#1db954";
    a = 1;
  }
}

load();
