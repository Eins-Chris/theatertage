var countDownDate = new Date("Jul 17, 2024 14:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Making the count down visible
    document.getElementById("cd").style= "";

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id
    document.getElementById("d").innerHTML = days;
    document.getElementById("h").innerHTML = hours;
    document.getElementById("m").innerHTML = minutes;
    document.getElementById("s").innerHTML = seconds;

    // If the countdown is finished, make it invisible
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("cd").style.display="none";
    }
}, 1000);