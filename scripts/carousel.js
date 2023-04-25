// carousel.js

document.addEventListener('DOMContentLoaded', function () {
    fetch('./json/carousel-data.json')
      .then(response => response.json())
      .then(data => {
        const carousel = document.querySelector('.carousel');
  
        data.forEach(item => {
          const card = document.createElement('div');
          card.classList.add('carousel-card');
  
          const img = document.createElement('img');
          img.src = item.image;
          img.alt = item.name;
  
          const name = document.createElement('h3');
          name.textContent = item.name;
  
          const year = document.createElement('p');
          year.classList.add('year');
          year.textContent = item.year;
  
          const message = document.createElement('p');
          message.textContent = item.message;
  
          card.appendChild(img);
          card.appendChild(name);
          card.appendChild(year);
          card.appendChild(message);
          carousel.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Error fetching carousel data:', error);
      });
  });
  