const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');
const modalContainer = document.getElementById('modal-container');

openModalButton.addEventListener('click', () => {
  modalContainer.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});