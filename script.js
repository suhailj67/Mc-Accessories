// Dark mode toggle
document.getElementById('darkModeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Search filter
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', () => {
  const filter = searchInput.value.toLowerCase();
  document.querySelectorAll('.product-card').forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? "block" : "none";
  });
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if(targetEl){
      const offsetTop = targetEl.offsetTop - 70;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section-headline, .products').forEach(el => {
  observer.observe(el);
});

// Active nav on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if(window.scrollY >= section.offsetTop - 80){
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("href").includes(current)){
      link.classList.add("active");
    }
  });
});
