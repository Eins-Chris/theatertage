function f0() {
    remove();
    document.getElementById('f0').classList.add("selected");
    document.getElementById('b0').classList.add("selected");
}
function f1() {
    remove();
    document.getElementById('f1').classList.add("selected");
    document.getElementById('b1').classList.add("selected");
}
function f2() {
    remove();
    document.getElementById('f2').classList.add("selected");
    document.getElementById('b2').classList.add("selected");
}
function remove() {
    for(var i = 0; i < 3; i++) {
        document.getElementsByClassName('f-wrapper')[i].classList.remove("selected");
        document.getElementsByClassName('b-wrapper')[i].classList.remove("selected");
    }
}