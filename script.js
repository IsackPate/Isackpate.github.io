function switchLanguage() {
  const lang = document.getElementById("languageSwitcher").value;
  alert("Lugha imebadilishwa kuwa: " + (lang === "sw" ? "Kiswahili" : "English"));
}

function submitProduct(event) {
  event.preventDefault();
  alert("Bidhaa imeongezwa kwa mafanikio!");
}
