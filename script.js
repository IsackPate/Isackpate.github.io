document.getElementById("addProductForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const description = this.description.value.trim();
  const price = this.price.value.trim();
  const file = this.image.files[0];
  if (!file) return alert("Tafadhali chagua picha.");

  const reader = new FileReader();
  reader.onload = () => {
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    products.push({ name, description, price, image: reader.result });
    localStorage.setItem("products", JSON.stringify(products));
    this.reset();
    displayProducts();
  };
  reader.readAsDataURL(file);
});

function displayProducts() {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `<img src="${p.image}" alt="${p.name}"><h3>${p.name}</h3><p>${p.description}</p><span>${p.price} TZS</span>`;
    container.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", displayProducts);
function changeLanguage(sel) {
  alert("Lugha imebadilishwa kuwa: " + (sel.value === "sw" ? "Kiswahili" : "English"));
}