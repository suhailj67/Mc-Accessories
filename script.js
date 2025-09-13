// Zoom + Blur effect on product click
document.querySelectorAll('.product').forEach(product => {
  product.addEventListener('click', () => {
    product.classList.toggle('zoomed');
    document.body.classList.toggle('blur-bg');
  });
});

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

document.querySelectorAll('.scroll-effect').forEach((el) => observer.observe(el));

// Smooth scroll for "Shop Now" button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});// Optional smooth scroll for future buttons/links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// Zoom + Blur effect on// Subtle glowing effect for car on pulse
const car = document.querySelector('.car');
const pulse = document.querySelector('.pulse');

pulse.addEventListener('animationiteration', () => {
  car.style.filter = "drop-shadow(0 0 40px cyan)";
  setTimeout(() => {
    car.style.filter = "drop-shadow(0 0 25px #00f)";
  }, 800);
});