const navDropdown = document.getElementsByClassName("nav-dropdown")[0];
const navSubMenu = document.getElementsByClassName("nav-sub-menu")[0];
const bigNavDropDown = document.getElementsByClassName("nav-big-dropdown")[0];
const bigNavSubMenu = document.getElementsByClassName("nav-big-sub-menu")[0];

let navToggle = false;

navDropdown.onclick = (event) => {
  navToggle = !navToggle;

  if (navToggle) navSubMenu.classList.add("show")
  else navSubMenu.classList.remove("show");
}

let bigNavToggle = false;

bigNavDropDown.onclick = (event) => {
  bigNavToggle = !bigNavToggle;

  if (bigNavToggle) bigNavSubMenu.classList.add("show")
  else bigNavSubMenu.classList.remove("show");
}