// Prompt the user to input product information
const productName = prompt("Enter the product name:");
const price = parseFloat(prompt("Enter the price:"));
const quantity = parseInt(prompt("Enter the quantity:"));

// Calculate the subtotal
const subtotal = price * quantity;

// Calculate the tax (10% tax rate)
const taxRate = 0.1;
const tax = subtotal * taxRate;

// Calculate the final price including tax
const totalPrice = subtotal + tax;

// Display the information in the console
console.log("Product Name:", productName);
console.log("Price:", price);
console.log("Quantity:", quantity);
console.log("Subtotal:", subtotal);
console.log("Tax:", tax);
console.log("Total Price:", totalPrice);

// Display the results in HTML like a receipt
const receiptContainer = document.getElementById("receipt");

const productNameElement = document.createElement("p");
productNameElement.textContent = "Product Name: " + productName;
receiptContainer.appendChild(productNameElement);

const priceElement = document.createElement("p");
priceElement.textContent = "Price: $" + price.toFixed(2);
receiptContainer.appendChild(priceElement);

const quantityElement = document.createElement("p");
quantityElement.textContent = "Quantity: " + quantity;
receiptContainer.appendChild(quantityElement);

const subtotalElement = document.createElement("p");
subtotalElement.textContent = "Subtotal: $" + subtotal.toFixed(2);
receiptContainer.appendChild(subtotalElement);

const taxElement = document.createElement("p");
taxElement.textContent = "Tax: $" + tax.toFixed(2);
receiptContainer.appendChild(taxElement);

const totalPriceElement = document.createElement("p");
totalPriceElement.textContent = "Total Price: $" + totalPrice.toFixed(2);
receiptContainer.appendChild(totalPriceElement);
