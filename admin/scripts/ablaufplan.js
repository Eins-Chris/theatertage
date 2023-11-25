function d17() {
    remove();
    document.getElementById('d17').classList.add("selected");
    document.getElementById('b17').classList.add("selected");
}
function d18() {
    remove();
    document.getElementById('d18').classList.add("selected");
    document.getElementById('b18').classList.add("selected");
}
function d19() {
    remove();
    document.getElementById('d19').classList.add("selected");
    document.getElementById('b19').classList.add("selected");
}
function d20() {
    remove();
    document.getElementById('d20').classList.add("selected");
    document.getElementById('b20').classList.add("selected");
}
function remove() {
    for(var i = 0; i < 4; i++) {
        document.getElementsByClassName('d-wrapper')[i].classList.remove("selected");
        document.getElementsByClassName('b-wrapper')[i].classList.remove("selected");
    }
}