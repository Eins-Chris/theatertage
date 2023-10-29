const navDropdown1 = document.getElementsByClassName("nav-dropdown")[0];
const navSubMenu1 = document.getElementsByClassName("nav-sub-menu")[0];
const navDropdown2 = document.getElementsByClassName("nav-dropdown")[1];
const navSubMenu2 = document.getElementsByClassName("nav-sub-menu")[1];
const bigNavDropDown = document.getElementsByClassName("nav-big-dropdown")[0];
const bigNavSubMenu = document.getElementsByClassName("nav-big-sub-menu")[0];

let navToggle1 = false;
let navToggle2 = false;
let bigNavToggle = false;

navDropdown1.onclick = (event) => {
    navToggle1 = !navToggle1;
    navToggle2 = false;

    if (navToggle1) navSubMenu1.classList.add("show")
    else navSubMenu1.classList.remove("show");
    if (navToggle2) navSubMenu2.classList.add("show")
    else navSubMenu2.classList.remove("show");
}

navDropdown2.onclick = (event) => {
    navToggle2 = !navToggle2;
    navToggle1 = false;

    if (navToggle1) navSubMenu1.classList.add("show")
    else navSubMenu1.classList.remove("show");
    if (navToggle2) navSubMenu2.classList.add("show")
    else navSubMenu2.classList.remove("show");
}

bigNavDropDown.onclick = (event) => {
    bigNavToggle = !bigNavToggle;

    if (bigNavToggle) bigNavSubMenu.classList.add("show")
    else bigNavSubMenu.classList.remove("show");
}

//const navDropdown = document.querySelector('.nav-dropdown');
//navDropdown.addEventListener('click', () => {
//    navDropdown.classList.toggle('show');
//})