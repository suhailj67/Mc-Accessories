

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

