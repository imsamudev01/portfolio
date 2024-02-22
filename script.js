const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  nav.classList.toggle("active", window.scrollY > 0);
});

function mOver(obj) {
  obj.innerHTML = "Trainee";
}

function mOut(obj) {
  obj.innerHTML = "Desarrollador Web";
}
