function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ 
    behavior: "smooth" 
  });
}

function openModal(imgSrc) {
  let modal = document.getElementById("modal");
  let modalImg = document.getElementById("modalImg");

  modal.style.display = "block";
  modalImg.src = imgSrc;
}

function closeModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}