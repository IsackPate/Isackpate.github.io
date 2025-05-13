
document.getElementById("addProductForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;
    const image = document.getElementById("productImage").value;
    const link = document.getElementById("productLink").value;

    const newProduct = document.createElement("div");
    newProduct.className = "product";
    newProduct.innerHTML = `
        <img src="${image}" alt="${name}" />
        <h3>${name}</h3>
        <p>${price} TZS</p>
        <a href="${link}" target="_blank">Nunua kwa WhatsApp</a>
    `;

    document.getElementById("productList").appendChild(newProduct);
    e.target.reset();
});
