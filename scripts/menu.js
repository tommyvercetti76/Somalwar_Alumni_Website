document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
  
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      menu.classList.toggle("open");
    });
  
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        menuToggle.classList.remove("active");
        menu.classList.remove("open");
      }
    });
  });
  