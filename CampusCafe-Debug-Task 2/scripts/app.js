const menuGrid = document.getElementById("menu-grid");
const cartList = document.getElementById("cart-list");
const cartSubtotalEl = document.getElementById("cart-subtotal");
const cartCountEl = document.getElementById("cart-count");
const cartMsgEl = document.getElementById("cart-msg");
const checkoutBtn = document.getElementById("checkout-btn");

// Fix: Properly initialize the cart variable
let cart = JSON.parse(localStorage.getItem("campus_cart")) || [];

function renderMenu(items) {
  menuGrid.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="card-header">
        <span class="category-tag">${item.category}</span>
        <span class="price">₹${item.price}</span>
      </div>
      <h3>${item.name}</h3>
      <p style="font-size: 0.85rem; color: #6b7280;">${item.description}</p>
      <button class="btn btn-primary add-btn" data-id="${item.id}">Add to Cart</button>
    `;
    menuGrid.appendChild(card);
  });

  // Fix: Use querySelectorAll to attach event listeners to all buttons
  const addButtons = document.querySelectorAll(".add-btn");
  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      addToCart(id);
    });
  });
}

function addToCart(itemId) {
  // Implementation for adding the item to the cart
  console.log(`Item with ID ${itemId} added to cart`);
}