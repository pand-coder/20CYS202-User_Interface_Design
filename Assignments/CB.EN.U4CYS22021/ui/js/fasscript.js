let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
} 


let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
} 

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
} 


document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = ''; 
  
    if (email === '' || password === '') {
        if (email === '') {
            errorMessages.innerHTML += '<p>Email is required.</p>';
        }
        if (password === '') {
            errorMessages.innerHTML += '<p>Password is required.</p>';
        }
    } else {
        // Here, you can send the email and password to your server or perform any other necessary actions
        console.log('Email:', email);
        console.log('Password:', password);
    }
});
// fasscript.js

// Define a function to add a product to the cart
function addToCart(btn) {
    // Get the product details from the clicked button's parent container
    var productContainer = btn.parentNode;
    var productName = productContainer.querySelector('h3').innerText;
    var productPrice = productContainer.querySelector('.price').innerText;

    // Create a new cart item
    var cartItem = document.createElement('div');
    cartItem.classList.add('box');

    // Set the content of the cart item
    cartItem.innerHTML = `
        <i class="fa fa-trash" onclick="removeFromCart(this)"></i>
        <img src="${productContainer.querySelector('img').src}" alt="${productName}" width="90px" height="90px">
        <div class="content">
            <h3>${productName}</h3>
            <span class="price">${productPrice}</span>
            <span class="quantity">Qty: 1</span>
        </div>
    `;

    // Append the cart item to the shopping cart
    var shoppingCart = document.querySelector('.shopping-cart');
    shoppingCart.appendChild(cartItem);
}

// Define a function to remove a product from the cart
function removeFromCart(deleteBtn) {
    var cartItem = deleteBtn.parentNode;
    cartItem.remove();
}
