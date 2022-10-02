const bucharest = document.querySelector(".bucharest");
const timisoara = document.querySelector(".timisoara");
const oradea = document.querySelector(".oradea");
const cluj = document.querySelector(".cluj");
const arad = document.querySelector(".arad");
const currentCity = document.querySelector("#currentCity");

function changeLocation(city) {
  currentCity.innerText = city;
  displayCurrentWeather(city);
  displayWeatherForecast(city);
  localStorage.setItem("city", city);
}
bucharest.addEventListener("click", () => {
  changeLocation("București");
});
timisoara.addEventListener("click", () => {
  changeLocation("Timișoara");
});
oradea.addEventListener("click", () => {
  changeLocation("Oradea");
});
cluj.addEventListener("click", () => {
  changeLocation("Cluj");
});
arad.addEventListener("click", () => {
  changeLocation("Arad");
});
