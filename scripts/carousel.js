document.addEventListener('DOMContentLoaded', function () {
    fetch('./json/carousel-data.json')
      .then(response => response.json())
      .then(data => {
        const carousel = document.querySelector('.carousel');
  
        data.forEach(item => {
          const card = document.createElement('div');
          card.classList.add('carousel-card');
          card.addEventListener('click', () => openModal(item));
  
          const img = document.createElement('img');
          img.src = item.image;
          img.alt = item.name;
  
          const info = document.createElement('div');
          info.classList.add('info');
  
          const name = document.createElement('h3');
          name.textContent = item.name;
  
          const year = document.createElement('p');
          year.classList.add('year');
          year.textContent = item.year;
  
          const presentDay = document.createElement('p');
          presentDay.classList.add('presentDay');
          presentDay.textContent = item.presentDay;
  
          info.appendChild(name);
          info.appendChild(year);
          info.appendChild(presentDay);
          card.appendChild(img);
          card.appendChild(info);
          carousel.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Error fetching carousel data:', error);
      });
  });
  
  function openModal(item) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-close')) {
        modal.remove();
      }
    });
  
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
  
    const closeModal = document.createElement('span');
    closeModal.classList.add('modal-close');
    closeModal.innerHTML = '&times;';
    modalContent.appendChild(closeModal);
  
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    modalContent.appendChild(img);
  
    const name = document.createElement('h3');
    name.textContent = item.name;
    modalContent.appendChild(name);
  
    const year = document.createElement('p');
    year.classList.add('year');
    year.textContent = item.year;
    modalContent.appendChild(year);
  
    const presentDay = document.createElement('p');
    presentDay.classList.add('presentDay');
    presentDay.textContent = item.presentDay;
    modalContent.appendChild(presentDay);
  
    const message = document.createElement('p');
    message.textContent = item.message;
    modalContent.appendChild(message);
  
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
  }
  
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
  