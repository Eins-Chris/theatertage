var tog;

function check() {
    if (localStorage.getItem('darkmode') == null) {
        tog = false;
    } else {
        tog = localStorage.getItem('darkmode');
    }
}

function toggle() {
    if (localStorage.getItem('darkmode') == null) {
        tog = false;
    } else {
        tog = localStorage.getItem('darkmode');
    }

    if (tog == 'true') {
        tog = false;
    } else {
        tog = true;
    }

    localStorage.setItem('darkmode', tog);

    console.log(tog);
    set(tog);
}

function load() {
    check();

    console.log(tog);
    if (tog == false) {
        document.getElementById("content").classList.remove("darkmode");
        document.getElementById("dmtoggle").classList.remove("toggle");
    } else {
        document.getElementById("content").classList.add("darkmode");
        document.getElementById("dmtoggle").classList.add("toggle");
    }
}

function set(on) {
    if (on) {
        document.getElementById("content").classList.add("darkmode");
        document.getElementById("dmtoggle").classList.add("toggle");
    } else {
        document.getElementById("content").classList.remove("darkmode");
        document.getElementById("dmtoggle").classList.remove("toggle");
    }
}