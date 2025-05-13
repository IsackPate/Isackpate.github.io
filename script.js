
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("productForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;
    const image = document.getElementById("productImage").value;

    const productHTML = `
      <div class="product">
        <h3>${name}</h3>
        <img src="${image}" alt="${name}">
        <p>Bei: ${price}</p>
        <a href="https://wa.me/255683077079?text=Naomba%20${encodeURIComponent(name)}" class="buy-button" target="_blank">Buy on WhatsApp</a>
      </div>
    `;
    document.getElementById("product-list").innerHTML += productHTML;
    this.reset();
  });
});

function switchLanguage() {
  const lang = document.getElementById("languageSwitcher").value;
  alert("Lugha ya tovuti bado inarekebishwa: " + lang);
}
