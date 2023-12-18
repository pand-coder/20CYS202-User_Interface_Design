function toggleMenu() {
  var dropdown = document.getElementById("dropdown-menu");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Get all increment and decrement buttons
const incrementButtons = document.querySelectorAll('.increment');
const decrementButtons = document.querySelectorAll('.decrement');

// Add event listeners to increment and decrement buttons
incrementButtons.forEach(button => {
  button.addEventListener('click', increment);
});

decrementButtons.forEach(button => {
  button.addEventListener('click', decrement);
});

// Function to handle increment
function increment(event) {
  const button = event.target;
  const quantityElement = button.parentNode.querySelector('.quantity-value');
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity;
  console.log(quantity)
}

// Function to handle decrement
function decrement(event) {
  const button = event.target;
  const quantityElement = button.parentNode.querySelector('.quantity-value');
  let quantity = parseInt(quantityElement.textContent);
  if (quantity > 0) {
    quantity--;
    quantityElement.textContent = quantity;
  }
}

const quantityButtons = document.querySelectorAll('.quantity button');
quantityButtons.forEach(button => {
  button.addEventListener('click', updateTotal);
});


function calculateTotal() {
  let total = 0;
  const items = document.querySelectorAll('.quantity-value');
  for (const item of items) {
    const priceElement = item.parentNode.querySelector('.price');
    const price = parseInt(priceElement.textContent.replace(/Rs\. /, "")); // Extract price without currency symbol
    const quantity = parseInt(item.textContent);
    total += price * quantity;
  }
  return total;
}
// menuscripts.js

// Function to update the total when quantity changes
function updateTotal() {
  let total = 0; // Initialize total amount

  // Get all the quantity-value elements
  const quantities = document.querySelectorAll('.quantity-value');

  // Loop through quantities to calculate total
  for (const quantity of quantities) {
    const quantityValue = parseInt(quantity.textContent); 
    if (quantityValue > 0) { // Check if the quantity is more than 0
      const priceElement = quantity.closest('td').previousElementSibling; // Get the corresponding price element
      const priceValue = parseInt(priceElement.textContent.replace('Rs.', '')); // Extract the numeric value from the price string
      total += quantityValue * priceValue; // Add to the total
    }
  }

  // Display the calculated total
  const totalAmountDiv = document.getElementById('total-amount');
  totalAmountDiv.textContent = `Total: Rs.${total}`;
}

// Function to add an event listener to quantity change buttons
function setupQuantityChangeListeners() {
  // Get all the increment and decrement buttons
  console.log("button clicked");
  const incrementButtons = document.querySelectorAll('.increment');
  const decrementButtons = document.querySelectorAll('.decrement');

  // Add click event listeners to increment buttons
  incrementButtons.forEach(button => {
    button.addEventListener('click', function() {
      console.log("i");
      const quantitySpan = button.previousElementSibling; // The span that shows the quantity
      quantitySpan.textContent = parseInt(quantitySpan.textContent); // Increment the quantity
      updateTotal(); // Update the total whenever the quantity changes
    });
  });

  // Add click event listeners to decrement buttons
  decrementButtons.forEach(button => {
    button.addEventListener('click', function() {
      console.log("d")
      const quantitySpan = button.nextElementSibling; // The span that shows the quantity
      if (parseInt(quantitySpan.textContent) > 0) { // Check if the quantity is more than 0 before decrementing
        quantitySpan.textContent = parseInt(quantitySpan.textContent); // Decrement the quantity
        updateTotal(); // Update the total whenever the quantity changes
      }
    });
  });
}

// Call the function on initial load to setup the event listeners
document.addEventListener('DOMContentLoaded', function() {
  setupQuantityChangeListeners();
});

// Function to handle the purchase (for example, when clicking the Purchase button)
function addToCart() {
  // Here you would handle the logic to add the items to the cart
  // For now, we'll just call updateTotal to ensure the total is correct
  updateTotal();
  alert('Items added to cart!');
}


