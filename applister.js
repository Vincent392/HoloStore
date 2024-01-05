// applister.js
// made with chatgpt

// script.js

let labels; // Variable to store the extracted labels

// Function to fetch and extract labels from apps.json
function fetchLabels() {
  return fetch('apps.json')
    .then(response => response.json())
    .then(data => {
      labels = data.map(app => app.label); // Extracting only the "label" section
    })
    .catch(error => console.error('Error fetching apps.json:', error));
}

// Call the function once to fetch and extract labels from apps.json
fetchLabels()
  .then(() => {
    const appButtonsContainer = document.getElementById('appButtons');

    labels.forEach(label => {
      const button = document.createElement('button');
      button.innerText = label;

      button.addEventListener('click', function () {
        // You can add your logic here for what happens on button click
        console.log('Button clicked:', label);
      });

      appButtonsContainer.appendChild(button);
    });
  });