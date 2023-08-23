function weather(event){
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchInput.innerHTML = ("#search-results")
}
let search = document.querySelector("#search-form");
search.addEventListener("click", weather);

let currentDate = new Date();
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let day = days[currentDate.getDay()];
let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();

let todayDate = `${day} ${hour}:${minutes}`;
document.querySelector("h2").innerHTML = todayDate;
