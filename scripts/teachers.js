document.addEventListener("DOMContentLoaded", function () {
  fetch("teachers.json")
    .then((response) => response.json())
    .then((teachersData) => {
      const teachersContainer = document.querySelector(".teachers");

      teachersData.forEach((teacher) => {
        const teacherCard = document.createElement("div");
        teacherCard.classList.add("teacher-card");

        const teacherImage = document.createElement("img");
        teacherImage.classList.add("teacher-image");
        teacherImage.src = teacher.imagePath;
        teacherImage.alt = `${teacher.name}'s photo`;

        const teacherName = document.createElement("h3");
        teacherName.classList.add("teacher-name");
        teacherName.textContent = teacher.name;

        const teacherDesignation = document.createElement("p");
        teacherDesignation.classList.add("teacher-designation");
        teacherDesignation.textContent = teacher.designation;

        const teacherExperience = document.createElement("p");
        teacherExperience.classList.add("teacher-experience");
        teacherExperience.textContent = `${teacher.experience} experience`;

        teacherCard.appendChild(teacherImage);
        teacherCard.appendChild(teacherName);
        teacherCard.appendChild(teacherDesignation);
        teacherCard.appendChild(teacherExperience);

        teachersContainer.appendChild(teacherCard);
      });
    });
});
