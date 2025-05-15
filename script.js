// Admin login placeholder (expand as needed)
function showAddProductForm() {
  document.getElementById('admin-form').style.display = 'block';
}

// Add product to Firestore
async function addProduct(event) {
  event.preventDefault();
  const name = document.getElementById('product-name').value;
  const price = document.getElementById('product-price').value;
  const fileInput = document.getElementById('product-image');
  const file = fileInput.files[0];
  // For simplicity, we store image as base64
  const reader = new FileReader();
  reader.onload = async () => {
    await db.collection('products').add({
      name,
      price,
      image: reader.result,
      created: firebase.firestore.FieldValue.serverTimestamp()
    });
    alert('Bidhaa imeongezwa kwa mafanikio');
    loadProducts();
  };
  reader.readAsDataURL(file);
}

// Load products and render
async function loadProducts() {
  const container = document.getElementById('products');
  container.innerHTML = '';
  const snapshot = await db.collection('products').orderBy('created', 'desc').get();
  snapshot.forEach(doc => {
    const data = doc.data();
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${data.image}" alt="${data.name}" class="product-img"/>
      <h3>${data.name}</h3>
      <p>${data.price} TSH</p>
    `;
    container.appendChild(div);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  document.getElementById('add-product-form').addEventListener('submit', addProduct);
});
