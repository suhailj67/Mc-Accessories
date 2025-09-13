// Glow effect for car when pulse animation hits
const car = document.querySelector('.car');
const pulse = document.querySelector('.pulse');

pulse.addEventListener('animationiteration', () => {
  car.style.filter = "drop-shadow(0 0 40px cyan)";
  setTimeout(() => {
    car.style.filter = "drop-shadow(0 0 25px #00f)";
  }, 800);
});
