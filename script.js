
function buy(product) {
    var phone = "0683077079";
    var url = "https://wa.me/" + phone + "?text=" + encodeURIComponent("Nataka kununua " + product);
    window.open(url, "_blank");
}
