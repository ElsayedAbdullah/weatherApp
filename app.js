// init storage object
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData();
// init weather object
const weather = new Weather(weatherLocation.city);
// init ui object
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

// change location event
document.getElementById("w-change-btn").addEventListener("click", () => {
  const city = document.getElementById("city").value;

  // change location
  weather.changeLocation(city);

  // set location in localstorage
  storage.setLocationData(city);
  // get and display weather

  getWeather();

  // close modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((data) => {
      ui.paint(data);
      console.log(data);
    })
    .catch((err) => console.log(err));
}
