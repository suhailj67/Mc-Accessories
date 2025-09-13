// Subtle glowing effect for car on pulse
const car = document.querySelector('.car');
const pulse = document.querySelector('.pulse');

pulse.addEventListener('animationiteration', () => {
  car.style.filter = "drop-shadow(0 0 40px cyan)";
  setTimeout(() => {
    car.style.filter = "drop-shadow(0 0 25px #00f)";
  }, 800);
});
pulse.addEventListener('animationend', () => {
  car.style.filter = "drop-shadow(0 0 25px #00f)";
});

// Smooth scroll to section on button click
const scrollButton = document.querySelector('.scroll-button');
const targetSection = document.querySelector('.target-section');

scrollButton.addEventListener('click', () => {
  targetSection.scrollIntoView({ behavior: 'smooth' });
});

// Change button color on hover
scrollButton.addEventListener('mouseenter', () => {
  scrollButton.style.backgroundColor = '#00f';
});
scrollButton.addEventListener('mouseleave', () => {
  scrollButton.style.backgroundColor = '';
});

// Change button color on click
scrollButton.addEventListener('mousedown', () => {
  scrollButton.style.backgroundColor = '#008';
});
scrollButton.addEventListener('mouseup', () => {
  scrollButton.style.backgroundColor = '#00f';
});