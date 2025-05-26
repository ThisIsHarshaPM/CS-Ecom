document.getElementById("checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.removeItem("cart");
  document.getElementById("checkout-form").style.display = "none";
  document.getElementById("order-success").style.display = "block";
});
