fetch('/pageViews')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('pageViews').innerText = data['index'];
  })
  .catch((error) => console.error(error));
