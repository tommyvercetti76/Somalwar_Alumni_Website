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

  // Get the carousel and its indicators
const carousel = document.querySelector('.carousel');
const indicators = document.querySelectorAll('.carousel-indicator');

// Add click event listeners to the indicators
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    // Scroll to the corresponding card
    carousel.scrollTo({
      left: carousel.offsetWidth * index,
      behavior: 'smooth'
    });
  });
});

// Update the active indicator when scrolling
carousel.addEventListener('scroll', () => {
  const currentIndex = Math.round(carousel.scrollLeft / carousel.offsetWidth);
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('current');
    } else {
      indicator.classList.remove('current');
    }
  });
});

  