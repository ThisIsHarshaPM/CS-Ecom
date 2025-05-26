const cartContainer = document.getElementById("cart-container");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

if (cart.length === 0) {
  cartContainer.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cart.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
    `;
    cartContainer.appendChild(div);
    total += p.price;
  });
  document.getElementById("total-price").innerText = total;
}
