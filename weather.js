class Weather {
  constructor(city) {
    this.apikey = "0a785a6f81cf69c647652dbd61b4068b";
    this.city = city;
  }

  // fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
