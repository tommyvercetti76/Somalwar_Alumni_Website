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
  
          const presentDay = document.createElement('p');
          year.classList.add('presentDay');
          year.textContent = item.year;
  
          const message = document.createElement('p');
          message.textContent = item.message;
  
          card.appendChild(img);
          card.appendChild(name);
          card.appendChild(year);
          card.appendChild(presentDay);
          card.appendChild(message);
          carousel.appendChild(card);
  
          card.addEventListener('click', () => {
            openModal(item);
          });
        });
  
        // Add the indicators
        const indicators = document.querySelector('.carousel-indicators');
        data.forEach((_, index) => {
          const indicator = document.createElement('div');
          indicator.classList.add('carousel-indicator');
          indicators.appendChild(indicator);
  
          indicator.addEventListener('click', () => {
            carousel.scrollTo({
              left: carousel.offsetWidth * index,
              behavior: 'smooth'
            });
          });
        });
      })
      .catch(error => {
        console.error('Error fetching carousel data:', error);
      });
  
    // Modal functions
    const modal = document.getElementById('modal');
    const closeModalBtn = document.querySelector('.modal-close');
  
    function openModal(item) {
      document.getElementById('modal-image').src = item.image;
      document.getElementById('modal-name').textContent = item.name;
      document.getElementById('modal-year').textContent = item.year;
      document.getElementById('modal-present-day').textContent = item.presentDay;
      document.getElementById('modal-message').textContent = item.message;
      modal.style.display = 'block';
    }
  
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  
         
  