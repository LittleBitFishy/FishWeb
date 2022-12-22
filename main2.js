// main.js
const fishForm = document.getElementById('fish-form');
const message = document.getElementById('message');

fishForm.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form data
  const name = document.getElementById('name').value;
  const location = document.getElementById('location').value;
  const price = document.getElementById('price').value;

  // Validate the form data
  if (name === '' || price === '') {
    message.textContent = 'Please enter a fish name and price';
    return;
  }

  // Display a confirmation message
  message.textContent = `You sold a ${name} to the ${location} for $${price}!`;
});
