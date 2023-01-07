const button = document.querySelector(".navbar__ham");
const menu = document.querySelector(".navbar__links");

button.addEventListener("click", () => {
  button.classList.toggle("open");
  menu.classList.toggle("navbar__open");
});
