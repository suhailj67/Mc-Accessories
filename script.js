

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
// Smooth scroll offset fix
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const offsetTop = targetEl.offsetTop - 70; // adjust for sticky nav
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  });
});
// Highlight headline on nav click
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if(targetSection){
      // Scroll to exact section
      const offsetTop = targetSection.offsetTop - 70;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });

      // Remove previous highlights
      document.querySelectorAll(".section-headline h2").forEach(h => h.classList.remove("highlight-red"));

      // Add highlight only to clicked section
      const headline = targetSection.querySelector(".section-headline h2");
      headline.classList.add("highlight-red");

      // Remove highlight after 2 seconds
      setTimeout(() => headline.classList.remove("highlight-red"), 2000);
    }
  });
});
// Dark Mode Toggle
function toggleDarkMode() { document.body.classList.toggle("dark"); }

// Search Filter (hides empty sections)
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase();
  document.querySelectorAll("section").forEach(section => {
    let hasMatch = false;
    section.querySelectorAll(".product-card").forEach(card => {
      const text = card.innerText.toLowerCase();
      if(text.includes(filter)){
        card.style.display = "block";
        hasMatch = true;
      } else {
        card.style.display = "none";
      }
    });
    // Show section only if at least one product matches
    section.style.display = hasMatch ? "block" : "none";
  });
});

// Fade-in Observer for scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.1 });
document.querySelectorAll(".section-headline, .products, .product-card").forEach(el => observer.observe(el));

// Active Nav on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => { if(window.scrollY >= section.offsetTop - 100) current = section.id; });
  navLinks.forEach(link => link.classList.remove("active"));
  navLinks.forEach(link => { if(link.getAttribute("href").includes(current)) link.classList.add("active"); });
});

// Highlight headline on nav click
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if(targetSection){
      // Scroll to exact section
      const offsetTop = targetSection.offsetTop - 70;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });

      // Remove previous highlights
      document.querySelectorAll(".section-headline h2").forEach(h => h.classList.remove("highlight-red"));

      // Add highlight only to clicked section
      const headline = targetSection.querySelector(".section-headline h2");
      headline.classList.add("highlight-red");

      // Remove highlight after 2 seconds
      setTimeout(() => headline.classList.remove("highlight-red"), 2000);

    }
  });
});
// ================== SHOP NOW MODAL WITH SCROLL ==================
const modalOverlay = document.querySelector('.modal-overlay');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

document.querySelectorAll('.product-card .cta-btn').forEach(btn=>{
  btn.addEventListener('click', e=>{
    e.preventDefault();
    const card = btn.closest('.product-card');
    const section = card.closest('section');

    // Smooth scroll to section first
    const offsetTop = section.offsetTop - 70;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });

    // Wait until scroll completes (approx 500ms) then open modal
    setTimeout(()=>{
      modalImg.src = card.querySelector('img').src;
      modalTitle.innerText = card.querySelector('h3').innerText;
      modalDesc.innerText = card.querySelector('p').innerText;
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }, 500);
  });
});

modalOverlay.querySelector('.modal-close').addEventListener('click', ()=>{
  modalOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
});
