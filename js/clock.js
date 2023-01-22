const clock = document.querySelector("h2#clock");

function getClock() {
  const data = new Date();
  const hour = String(data.getHours()).padStart(2, "0");
  const minute = String(data.getMinutes()).padStart(2, "0");
  const second = String(data.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${minute}:${second}`;
}
getClock();
setInterval(getClock, 1000);
