function showModal(productElem) {
  document.getElementById('modal-img').src = productElem.querySelector('img').src;
  document.getElementById('modal-title').textContent = productElem.querySelector('h3').textContent;
  document.getElementById('modal-description').textContent = productElem.querySelector('p').textContent;
  document.getElementById('modal-price').textContent = productElem.querySelector('.price').textContent;
  document.getElementById('product-modal').classList.add('show');
  document.body.style.overflow = 'hidden'; // Disable background scroll
}

function closeModal() {
  document.getElementById('product-modal').classList.remove('show');
  document.body.style.overflow = 'auto';
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});