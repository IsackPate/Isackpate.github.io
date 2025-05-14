
document.querySelector("form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const price = document.querySelector('input[name="price"]').value;
  const file = document.querySelector('input[type="file"]').files[0];
  const reader = new FileReader();

  reader.onload = function() {
    const product = {
      name,
      price,
      image: reader.result
    };
    let products = JSON.parse(localStorage.getItem("products") || "[]");
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});

function displayProducts() {
  const container = document.getElementById("product-list");
  if (!container) return;
  container.innerHTML = "";
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  products.forEach(p => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.padding = "10px";
    div.style.width = "150px";
    div.innerHTML = `<img src="${p.image}" style="width: 100%; height: 100px; object-fit: cover;"><h4>${p.name}</h4><p>${p.price} TZS</p>`;
    container.appendChild(div);
  });
}

displayProducts();

function changeLanguage(select) {
  alert("Language switching in progress: " + select.value);
}
