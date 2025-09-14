

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
<script>
  document.querySelectorAll('.shop-btn').forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      if (button.classList.contains('animate')) return;

      button.classList.add('animate');

      setTimeout(() => {
        button.classList.remove('animate');
      }, 1000);
    });
  });
</script>

