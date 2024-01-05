// applister.js
// made with chatgpt

// script.js

let appsData; // Variable to store the apps data

// Function to fetch and process apps.json
function fetchAppsData() {
  return fetch('apps.json')
    .then(response => response.json())
    .then(data => {
      appsData = data;
    })
    .catch(error => console.error('Error fetching apps.json:', error));
}

// Call the function once to fetch apps.json
fetchAppsData()
  .then(() => {
    const appButtonsContainer = document.getElementById('appButtons');

    appsData.forEach(app => {
      const button = document.createElement('button');
      button.innerText = app.label;

      const image = document.createElement('img');
      image.src = app.imagefile;
      image.alt = app.label;

      button.appendChild(image);

      button.addEventListener('click', function () {
        window.location.href = app.page; // Navigate to the specified HTML page
      });

      appButtonsContainer.appendChild(button);
    });
  });