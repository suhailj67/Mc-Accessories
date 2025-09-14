// Glow effect for car when pulse animation hits
const car = document.querySelector('.car');
const pulse = document.querySelector('.pulse');

if (car && pulse) {
  pulse.addEventListener('animationiteration', () => {
    car.style.filter = "drop-shadow(0 0 40px cyan)";
    setTimeout(() => {
      car.style.filter = "drop-shadow(0 0 25px #00f)";
    }, 800);
  });
}

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
