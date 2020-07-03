const btn = document.getElementById("btn");
const modal = document.getElementById("myModal")
const closeModal = document.getElementById('close-modal');





btn.addEventListener('click', () => {
  modal.style.display = "block"
})

closeModal.addEventListener('click', () => {
  modal.style.display = "none"
})