// Get the button and pop-up tab container elements
const tabButton = document.querySelector('.tab-button');
const tabContent = document.querySelector('.tab-content');

// Add an event listener to the button
tabButton.addEventListener('click', () => {
  // Toggle the visibility of the pop-up tab
  tabContent.classList.toggle('show');

  // Position the pop-up tab near the button
  const buttonRect = tabButton.getBoundingClientRect();
  tabContent.style.top = `${buttonRect.top + 10}px`;
  tabContent.style.left = `${buttonRect.left + 10}px`;
});