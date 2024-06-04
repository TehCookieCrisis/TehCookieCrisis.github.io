document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('outerframe');
    const characterName = window.location.pathname.split('/').pop().split('.')[0]; // Assuming the filename matches character name

    fetch(`/characters/data/brianna.json`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('titlepicture').src = data.titlePicture;
        document.getElementById('titlename').innerHTML = data.titleName;
        document.getElementById('titlequote-text').innerHTML = data.titleQuote;
        document.getElementById('profilepicture').src = data.profilePicture;
        document.getElementById('concept').innerHTML = data.concept;
        document.getElementById('concept-description').innerHTML = data.conceptDescription;
        document.getElementById('name').innerHTML = data.name;
        document.getElementById('name-description').innerHTML = data.nameDescription;
        document.getElementById('clan').innerHTML = data.clan;
        document.getElementById('clan-description').innerHTML = data.clanDescription;
      })
      .catch(error => console.error('Error fetching character data:', error));
  });
