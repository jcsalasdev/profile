const navContainer = document.querySelector("#header_main-nav");
const profile = document.querySelector(".header_main-nav--profile");
const links = document.querySelectorAll(".header_main-nav--links li");

profile.addEventListener("click", () => {
  navContainer.classList.toggle("clicked");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
