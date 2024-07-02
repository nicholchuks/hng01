function updateTimeAndDay() {
  const now = new Date();
  const utcTime = now.toUTCString().split(" ")[4];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[now.getUTCDay()];

  document.getElementById("time").textContent = utcTime;
  document.getElementById("day").textContent = day;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);
