// applister.js
// made with chatgpt

// script.js

// Assuming apps.json structure: [{"label": "App1", "page": "app1.html", "imagefile": "app1.png"}, {"label": "App2", "page": "app2.html", "imagefile": "app2.png"}, ...]
fetch('apps.json')
  .then(response => response.json())
  .then(data => {
    const appButtonsContainer = document.getElementById('appButtons');
    
    data.forEach(app => {
      const button = document.createElement('button');
      button.innerText = app.label;

      const image = document.createElement('img');
      image.src = app.imagefile;
      image.alt = app.label;

      button.appendChild(image);

      button.addEventListener('click', function() {
        window.location.href = app.page; // Navigate to the specified HTML page
      });

      appButtonsContainer.appendChild(button);
    });
  })
  .catch(error => console.error('Error fetching apps.json:', error));