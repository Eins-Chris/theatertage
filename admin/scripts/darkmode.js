function toggle() {
    var tog;
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
    var doc = document.getElementById("content");
    doc.classList.add("darkmode");
    console.log(tog);
    if (tog == false) {
        doc.classList.remove("darkmode");
    }
}