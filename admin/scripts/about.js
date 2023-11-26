function schüler() {
    var schüler = document.getElementById('Schüler');
    set(schüler);
}
function seminar() {
    var seminar = document.getElementById('P-Seminar');
    set(seminar);
}
function gmg() {
    var gmg = document.getElementById('GMG');
    set(gmg);
}
function amberg() {
    var amberg = document.getElementById('Amberg');
    set(amberg);
}
function set(variable) {
    if (variable.classList.contains("selected"))
        variable.classList.remove("selected");
    else
        variable.classList.add("selected");
}