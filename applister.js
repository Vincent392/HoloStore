// applister.js
// made with chatgpt

// Assuming apps.json structure: [{"label": "App1", "imagefile": "app1.png"}, {"label": "App2", "imagefile": "app2.png"}, ...]
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

      button.appendChild(document.createElement('br')); // Add a line break for spacing
      button.appendChild(image);

      appButtonsContainer.appendChild(button);
    });
  })
  .catch(error => console.error('Error fetching apps.json:', error));