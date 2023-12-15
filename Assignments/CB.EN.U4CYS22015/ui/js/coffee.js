document.addEventListener("DOMContentLoaded", function () {
    const coffeeList = document.getElementById("coffee-list");

    // Example coffee products
    const coffeeProducts = [
        { name: "Espresso", price: 5.99, image: "../img/Espresso1.jpg" },
        { name: "Macchiato", price: 7.99, image: "../img/Macchiato.jpg" },
        { name: "Ristretto", price: 6.49, image: "../img/Ristretto.jpg" },
        { name: "Americano", price: 8.99, image: "../img/Americano1.jpg" },
        { name: "Café Latte", price: 4.99, image: "../img/Café Latte.jpg" },
        { name: "Cappuccino", price: 9.99, image: "../img/Cappuccino.jpg" },
        { name: "Flat White", price: 11.49, image: "../img/Flat White.jpg" },
        { name: "Piccolo Latte", price: 10.99, image: "../img/PiccoloLatte.jpg" },
        { name: "Mocha", price: 12.99, image: "../img/Mocha.jpg" },
        { name: "Affogato", price: 14.99, image: "../img/Affogato.jpg" },
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