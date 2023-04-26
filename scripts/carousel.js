document.addEventListener('DOMContentLoaded', function () {
    fetch('./json/carousel-data.json')
      .then(response => response.json())
      .then(data => {
        const carousel = document.querySelector('.carousel');
        const indicatorsContainer = document.querySelector('.carousel-indicators');
  
        data.forEach((item, index) => {
          // Create carousel cards
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
  
          const presentDay = document.createElement('p');
          presentDay.classList.add('presentDay');
          presentDay.textContent = item.presentDay;
  
          const message = document.createElement('p');
          message.textContent = item.message;
  
          card.appendChild(img);
          card.appendChild(name);
          card.appendChild(year);
          card.appendChild(presentDay);
          card.appendChild(message);
          carousel.appendChild(card);
  
          // Create carousel indicators
          const indicator = document.createElement('div');
          indicator.classList.add('carousel-indicator');
          if (index === 0) {
            indicator.classList.add('current');
          }
          indicatorsContainer.appendChild(indicator);
        });
  
        // Add event listeners to the carousel and its indicators
        initializeCarousel(carousel, indicatorsContainer);
      })
      .catch(error => {
        console.error('Error fetching carousel data:', error);
      });
  });
  
  function initializeCarousel(carousel, indicatorsContainer) {
    const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator');
  
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
  }
  