// applister.js
// made with chatgpt

// script.js

// Assuming apps.json structure: [{"label": "App1", "imagefile": "app1.png"}, {"label": "App2", "imagefile": "app2.png"}, ...]
fetch('apps.json')
  .then(response => response.json())
  .then(data => {
    const appButtonsContainer = document.getElementById('appButtons');
    
    data.forEach(app => {
      const button = document.createElement('button');
      button.innerHTML = app.label + '<br>'; // Add a line break for spacing

      const image = document.createElement('img');
      image.src = app.imagefile;
      image.alt = app.label;

      button.appendChild(image);

      appButtonsContainer.appendChild(button);
    });
  })
  .catch(error => console.error('Error fetching apps.json:', error));