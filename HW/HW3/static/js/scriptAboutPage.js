fetch('/pageViews')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('pageViews').innerText = data['about'];
  })
  .catch((error) => console.error(error));
