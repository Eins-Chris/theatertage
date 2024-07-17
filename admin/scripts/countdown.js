var countDownDate = new Date("Jul 20, 2024 13:00:00").getTime();

function updateCountdown() {

  // Making the countdown visible
  document.getElementById("cd").style= "";

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  if (distance < 0) distance = 0;

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
  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("cd").style.display="none";
  // }
}

// Update the countdown every 1 second
var x = setInterval(updateCountdown, 1000,);
