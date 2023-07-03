const navMenu = document.getElementById("navMenu");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const closeMenu = document.getElementById("closeMenu");
const hamburger = document.getElementById("hamburger");

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  closeMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});
