
<script>
document.getElementById('product-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var productName = document.getElementById('product-name').value;
  var productPrice = document.getElementById('product-price').value;
  var productDescription = document.getElementById('product-description').value;
  var productImage = document.getElementById('product-image').files[0];
  
  // Firebase function to save the product (pseudo-code)
  var storageRef = firebase.storage().ref('products/' + productImage.name);
  storageRef.put(productImage).then(function(snapshot) {
    snapshot.ref.getDownloadURL().then(function(url) {
      var productRef = firebase.database().ref('products');
      productRef.push({
        name: productName,
        price: productPrice,
        description: productDescription,
        imageUrl: url
      });
      alert('Product added successfully!');
    });
  });
});
</script>
