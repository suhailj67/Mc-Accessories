

// Smooth scroll for "Shop Now"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.querySelector('.shop-btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.body.style.overflow = "auto";
  const products = document.querySelector('#products');
  products.scrollIntoView({ behavior: 'smooth' });
  products.classList.add('highlight');
  setTimeout(() => products.classList.remove('highlight'), 2000);
});

document.getElementById("shopNowBtn").addEventListener("click", function(e) {
  e.preventDefault();

  const lights = document.querySelectorAll(".headlight");
  lights.forEach(light => {
    light.classList.add("blink");
  });

  // After animation, redirect
  setTimeout(() => {
    window.location.href = "explore.html";
  }, 1300);

  // Reset blink class so it can play again on next click
  setTimeout(() => {
    lights.forEach(light => light.classList.remove("blink"));
  }, 2000);
});

