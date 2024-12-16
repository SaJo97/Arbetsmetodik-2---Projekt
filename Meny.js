
fetch('specials.json')
  .then(response => response.json())
  .then(data => {
    const menuContainer = document.querySelector('.menu'); 
    
    data.forEach(dish => {
      
      const dishElement = document.createElement('div');
      dishElement.classList.add('dish');
      
      dishElement.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}">
        <ul>
          <li>${dish.name}</li>
          <li>${dish.comment}</li>
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
      
    
      menuContainer.appendChild(dishElement);

   
      const readMoreButton = dishElement.querySelector('.readmore');
      readMoreButton.addEventListener('click', () => {
        const moreInfo = dishElement.querySelector('.more-info');
     
        if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
          moreInfo.style.display = 'block';
          readMoreButton.textContent = 'Read less'; 
        } else {
          moreInfo.style.display = 'none';
          readMoreButton.textContent = 'Read more'; 
        }
      });

     
const favoriteButton = dishElement.querySelector('.favorite');
favoriteButton.addEventListener('click', () => {
 
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  
  if (!favorites.some(fav => fav.name === dish.name)) {
    favorites.push(dish);
    localStorage.setItem('favorites', JSON.stringify(favorites)); 
    alert(`${dish.name} added to favorites!`);
  } else {
    favorites = favorites.filter(fav => fav.name !== dish.name);
    localStorage.setItem('favorites', JSON.stringify(favorites)); 
    alert(`${dish.name} removed from favorites.`); 
  }
});
})
.catch(error => console.error('Error loading menu data:', error));