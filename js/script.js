console.log("E-Shop Script Loaded!");

// --- Simulated Product Data ---
const clientProducts = [
  { name: "HP Laptop", price: 65999, category: "Electronics", imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
  { name: "Men's T-Shirt", price: 499, category: "Fashion", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDCNsZtFGTW5e6GjVk_h-IHHWn4hQFN4vNA&s" },
  { name: "Gaming Console", price: 35000, category: "Electronics", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNUUO3cpX28CAALIB3iyG662Wb5iSuyCwMQ&s" },
  { name: "Wireless Headphones", price: 1499, category: "Electronics", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmlZ0wXZFgfZcDnizdx5a9oTNGppUCh0kfw&s" },
  { name: "Bluetooth Speaker", price: 1299, category: "Electronics", imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e" },
  { name: "Women's Dress", price: 999, category: "Fashion", imageUrl: "https://www.bullionknot.com/cdn/shop/files/11_ae4468b9-ccea-465a-818d-ae3b3b8e0287.jpg?v=1754402469&width=1200" },
  { name: "Hand Bag", price: 2999, category: "Fashion", imageUrl: "https://assets.ajio.com/medias/sys_master/root/20240722/dbbq/669e34346f60443f31982060/-473Wx593H-700216447-purple-MODEL.jpg" },
  { name: "Slippers", price: 899, category: "Fashion", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVv-9cZwn49LYrpTmmOyXnXALZ_dHgdfqxmw&s" },
  { name: "Makeup Kit", price: 1499, category: "Beauty", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShC64-gaHiiKU2EOFjahM_8ppElr6hB1bMsg&s" },
  { name: "Perfume", price: 999, category: "Beauty", imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Date_woman_100_ml_1.jpg?v=1728029584&width=500" },
  { name: "Basmati Rice", price: 499, category: "Grocery", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVPnnzyHyaJqOv1Em8-3yRjkt41J8EZXv8Q&s" },
  { name: "Sunflower Oil", price: 150, category: "Grocery", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqSNsbNVTTAB0ujCpv5xXKBI1mAamqeyBw2Q&s" }
];

// --- Add to Cart Function ---
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

// --- Search Function ---
function performSearch() {
  const query = document.getElementById('search-input').value;
  const dynamicContent = document.getElementById('dynamic-content');
  
  if (!query.trim()) {
    dynamicContent.innerHTML = '<h2>Please enter a search query.</h2>';
    return;
  }

  const results = clientProducts.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  let html = `<h2>${results.length} Results for "${query}"</h2><div class="product-grid">`;
  if (results.length === 0) {
    html += "<p>No matching products found.</p>";
  } else {
    results.forEach(p => {
      html += `
        <div class="product-card">
          <img src="${p.imageUrl}" alt="${p.name}">
          <h4>${p.name}</h4>
          <p>Category: ${p.category}</p>
          <p>₹${p.price.toLocaleString()}</p>
          <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
        </div>`;
    });
  }
  html += "</div>";
  dynamicContent.innerHTML = html;
}

// --- Place Order Function (Shared) ---
function placeOrder() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const paymentMethod = document.getElementById('payment-method')?.value;

  if (cart.length === 0) {
    alert("Your cart is empty. Nothing to order.");
    return;
  }

  if (!paymentMethod) {
    alert("Please select a payment method before placing your order.");
    return;
  }

  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  
  const newOrder = {
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    items: cart,
    total: cart.reduce((sum, item) => sum + item.price, 0),
    payment: paymentMethod
  };

  orders.unshift(newOrder); 
  localStorage.setItem('orders', JSON.stringify(orders));

  localStorage.removeItem("cart");
  alert(`✅ Order placed successfully!\nPayment method: ${paymentMethod.toUpperCase()}`);
  window.location.href = "orders.html";
}
