document.addEventListener('DOMContentLoaded', () => {
    fetch('/json/teachers.json')
      .then(response => response.json())
      .then(teachers => {
        const teachersContainer = document.querySelector('.teachers');
        teachersContainer.innerHTML = '';
  
        teachers.forEach(teacher => {
          const teacherCard = document.createElement('div');
          teacherCard.classList.add('teacher-card');
  
          teacherCard.innerHTML = `
            <img src="${teacher.imagePath}" alt="${teacher.name}" class="teacher-image">
            <h3 class="teacher-name">${teacher.name}</h3>
            <p class="teacher-experience">${teacher.experience}</p>
            <p class="teacher-designation">${teacher.designation}</p>
          `;
  
          teachersContainer.appendChild(teacherCard);
        });
      })
      .catch(error => console.error('Error fetching teachers data:', error));
  });
  