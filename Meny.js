// Funktion för att hämta och visa menyer från specials.json
fetch('specials.json')
  .then(response => response.json())
  .then(data => {
    const menuContainer = document.querySelector('.menu'); // Hitta div för menyn
    
    data.forEach(dish => {
      // Skapa HTML-struktur för varje rätt
      const dishElement = document.createElement('div');
      dishElement.classList.add('dish');
      
      dishElement.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}">
        <ul>
          <li>${dish.name}</li>
          <li>Price: ${dish.price}</li>
        </ul>
        <button class="readmore">Read more</button>
        <button class="favorite">Add to Favorites</button>
        <ul class="more-info" style="display: none;">
          <li>Description: <p>${dish.description}</p></li>
          <li>Ingredients:
            <ul>
              ${dish.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
          </li>
        </ul>
      `;
      
      // Lägg till den dynamiskt skapade rätten i menyn
      menuContainer.appendChild(dishElement);

      // Hantera Read more-knappen
      const readMoreButton = dishElement.querySelector('.readmore');
      readMoreButton.addEventListener('click', () => {
        const moreInfo = dishElement.querySelector('.more-info');
        // Använd en enkel toggle för att visa/dölja information
        if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
          moreInfo.style.display = 'block';
          readMoreButton.textContent = 'Read less'; // Ändra text på knappen
        } else {
          moreInfo.style.display = 'none';
          readMoreButton.textContent = 'Read more'; // Ändra tillbaka texten
        }
      });

      // Hantera favorit-knappen
      const favoriteButton = dishElement.querySelector('.favorite');
      favoriteButton.addEventListener('click', () => {
        // Hämta den nuvarande favoriterna från localStorage, eller en tom array om ingen finns
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        // Kontrollera om rätten redan finns i favoriter
        if (!favorites.some(fav => fav.name === dish.name)) {
          favorites.push(dish); // Lägg till den här rätten till favoriter
          localStorage.setItem('favorites', JSON.stringify(favorites)); // Spara till localStorage
          alert(`${dish.name} added to favorites!`);
        } else {
          alert(`${dish.name} is already in your favorites.`);
        }
      });
    });
  })
  .catch(error => console.error('Error loading menu data:', error));