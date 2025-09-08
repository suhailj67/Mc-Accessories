document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product");
  const body = document.body;

  products.forEach(product => {
    product.addEventListener("click", e => {
      e.stopPropagation(); // stop bubbling

      // Reset
      products.forEach(p => p.classList.remove("active"));
      body.classList.remove("blurred");

      // Set active
      product.classList.add("active");
      body.classList.add("blurred");
    });
  });

  // Click outside → reset
  document.addEventListener("click", () => {
    products.forEach(p => p.classList.remove("active"));
    body.classList.remove("blurred");
  });
});