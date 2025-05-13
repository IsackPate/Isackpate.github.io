document.getElementById('addProductForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;
  const image = document.getElementById('productImage').value;

  const productHTML = `<div class="product-item"><img src="${image}" alt="${name}"><h3>${name}</h3><p>${price} TZS</p></div>`;
  const list = document.getElementById('productList');
  if (list) list.innerHTML += productHTML;

  this.reset();
});

function switchLanguage(lang) {
  if (lang === 'en') {
    window.location.href = 'index.html';
  } else {
    window.location.href = 'index-sw.html';
  }
}
