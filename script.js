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

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
