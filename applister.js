// applister.js
// made with chatgpt

// script.js

document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('apps.json');
    const data = await response.json();

    const appButtonsContainer = document.getElementById('appButtons');

    data.forEach(app => {
  const button = document.createElement('button');

  const image = document.createElement('img');
  image.src = app.imagefile;
  image.alt = app.label;

  const label = document.createElement('span');
  label.innerText = app.label;

  button.appendChild(image);
  button.appendChild(label);

  button.addEventListener('click', function () {
    window.location.href = app.page; // Navigate to the specified HTML page
  });

  appButtonsContainer.appendChild(button);
});
  } catch (error) {
    console.error('Error fetching or processing apps.json:', error);
  }
});