var tog;

function darkmode() {
    initialize();
    toggle();
    set(tog);
}

function checkDarkmode() {
    initialize();
    set(tog);
}

function initialize() {
    if (localStorage.getItem('darkmode') == null || localStorage.getItem('darkmode') == undefined) {
        tog = 0;
    } else {
        tog = localStorage.getItem('darkmode');
    }
}

function toggle() {
    if (tog == 1) {
        tog = 0;
    } else if (tog == 0) {
        tog = 1;
    }
    localStorage.setItem('darkmode', tog);
}

function set(on) {
    if (on == 1) {
        document.getElementsByClassName("body")[0].classList.add("darkmode");
    } else {
        document.getElementsByClassName("body")[0].classList.remove("darkmode");
    }
}