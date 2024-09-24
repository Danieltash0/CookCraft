const openModalButton = document.getElementById('open-modal');
const recipeContainer = document.getElementById('recipe-container');
const closeModalButton = document.getElementById('close-modal');

openModalButton.addEventListener('click', () => {
  recipeContainer.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  recipeContainer.style.display = 'none';
});