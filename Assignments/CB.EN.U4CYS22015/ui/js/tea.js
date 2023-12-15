document.addEventListener("DOMContentLoaded", function () {
    const coffeeList = document.getElementById("coffee-list");

    // Example coffee products
    const coffeeProducts = [
        { name: "Black tea", price: 7.99, image: "../img/Black_tea.jpg" },
        { name: "Green tea", price: 8.99, image: "../img/Green_tea.jpg" },
        { name: "Oolong tea ", price: 9.49, image: "../img/Oolong_tea.jpg" },
        { name: "Pu-erh tea", price: 12.99, image: "../img/Pu-erh tea.jpg" },
        { name: "Matcha", price: 19.99, image: "../img/Matcha.jpg" },
        { name: "Herbal tea", price: 15.99, image: "../img/Herbal tea.jpg" },
        { name: "Rooibos teas", price: 20.49, image: "../img/Rooibos teas.jpg" },
        { name: "White tea", price: 13.99, image: "../img/White tea.jpg" },
       
        // Add more coffee products as needed
    ];

    coffeeProducts.forEach(product => {
        const productDiv = createProductDiv(product);
        coffeeList.appendChild(productDiv);
    });
});

function createProductDiv(product) {
    const div = document.createElement("div");
    div.classList.add("product");

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;

    const name = document.createElement("p");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `$${product.price.toFixed(2)}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = product.price;
    checkbox.addEventListener("change", updateTotal);

    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(price);
    div.appendChild(checkbox);

    return div;
}

function updateTotal() {
    const checkboxes = document.querySelectorAll("#coffee-list input[type=checkbox]");
    const totalSpan = document.getElementById("coffee-total-price");

    let total = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            total += parseFloat(checkbox.value);
        }
    });

    if(total==0){
        alert('Please order atleast one.Cannot proceed to payment portal');
    }

    totalSpan.textContent = total.toFixed(2);
}