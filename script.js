
document.getElementById("productForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const whatsapp = e.target.whatsapp.value;

    const newProduct = document.createElement("div");
    newProduct.className = "product";
    newProduct.innerHTML = `
        <img src="${image}" alt="${name}" />
        <h3>${name}</h3>
        <p>${price} TZS</p>
        <a href="${whatsapp}" target="_blank">Buy on WhatsApp</a>
    `;

    document.getElementById("productSlider").appendChild(newProduct);
    e.target.reset();
});
