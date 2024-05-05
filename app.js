let weather = {
  "apiKey": "8a2c658f6e6f76f1a19d5fb0e81fcc7d",
  fetchWeather: function () {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=imperial&appId=8a2c658f6e6f76f1a19d5fb0e81fcc7d"
      )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
};