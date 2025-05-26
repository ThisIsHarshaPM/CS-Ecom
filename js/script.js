const products = [
  { id: 1, name: "Made in India Smartphone", price: 15000, img: "assets/images/product1.jpg" },
  { id: 2, name: "Indian Smartwatch", price: 4000, img: "assets/images/product2.jpg" },
  { id: 3, name: "Wireless Earbuds", price: 2000, img: "assets/images/product3.jpg" }
];

const productList = document.getElementById("product-list");
if (productList) {
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(products.find(p => p.id === id));
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Item added to cart!");
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").innerText = cart.length;
}

document.addEventListener("DOMContentLoaded", updateCartCount);
