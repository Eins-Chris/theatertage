const navDropdown = document.getElementsByClassName("nav-dropdown")[0];
const navSubMenu = document.getElementsByClassName("nav-sub-menu")[0];

let navShown = false;

navDropdown.onclick = (event) => {
  navShown = !navShown;

  if (navShown) navSubMenu.classList.add("show")
  else navSubMenu.classList.remove("show");
}