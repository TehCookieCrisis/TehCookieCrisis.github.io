document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('outerframe');
    const characterName = window.location.pathname.split('/').pop().split('.')[0]; // Assuming the filename matches character name

    fetch(`../data/brianna.json`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('titlepicture').src = data.titlePicture;
        document.getElementById('titlename').textContent = data.titleName;
        document.getElementById('titlequote-text').textContent = data.titleQuote;
        document.getElementById('profilepicture').src = data.profilePicture;
        document.getElementById('concept').textContent = data.concept;
        document.getElementById('concept-description').textContent = data.conceptDescription;
      })
      .catch(error => console.error('Error fetching character data:', error));
  });
