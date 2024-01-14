const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");
const navTarget = document.getElementById("nav-target");
const dropdownOpen = document.getElementById("dropdown-open");

const navHandler = () => {
  navTarget.classList.toggle("fullscreen");
  document.body.classList.toggle("no-scroll");
};
const dropdownHandler = () => {
  navTarget.classList.toggle("dropdown");
};
const dropdownCloseHandler = event => {
  if (event.target !== dropdownOpen) {
    navTarget.classList.remove("dropdown");
  }
};

navOpen.onclick = navHandler;
navClose.onclick = navHandler;
dropdownOpen.onclick = dropdownHandler;
document.onclick = dropdownCloseHandler;

$(window).scroll(function () {
  // navTarget.classList.toggle("scrolled", $(this).scrollTop() > 50);
  const scroll = $(this).scrollTop();
  if (scroll > 50) {
    navTarget.classList.add("scrolled");
  } else if (scroll < 5) {
    navTarget.classList.remove("scrolled");
  }
});
