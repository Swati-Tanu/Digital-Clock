let clock = function () {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Pad single digits with 0
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.querySelector("#hrs").innerText = hours;
  document.querySelector("#mins").innerText = minutes;
  document.querySelector("#secs").innerText = seconds;
};

setInterval(clock, 1000);
clock();
