// Fade-in animation on scroll
const faders = document.querySelectorAll('.product-card, .hero-title, .hero-subtitle');

const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });
// Simple click alert for now
document.querySelectorAll('.product-card, .product').forEach(card => {
  card.addEventListener('click', () => {
    alert(You clicked on ${card.querySelector('h3').textContent});
  });
});