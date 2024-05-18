let weather = {
  apiKey: "8a2c658f6e6f76f1a19d5fb0e81fcc7d",

  // Function to fetch weather data for a given city
  fetchWeather: function (city) {
    // Fetch weather data from OpenWeatherMap API
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appId=" +
        this.apiKey
    )
      // Convert response to JSON format
      .then((response) => response.json())
      // Display weather data
      .then((data) => this.displayWeather(data));
  },

  // Function to display weather data
  displayWeather: function (data) {
    // Destructure data object to extract necessary information
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    // Round temperature and wind speed to remove decimal points
    const roundedTemp = temp.toFixed(0);
    const roundedSpeed = speed.toFixed(0);

    // Update DOM elements with weather information
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = roundedTemp + "°F";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + roundedSpeed + " mph";
    document.querySelector(".weather").classList.remove("loading");
    // Change background image based on city location
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },

  // Function to initiate weather search
  search: function () {
    // Get value from search bar and fetch weather data
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

// Event listener for search button click
document.querySelector(".search button").addEventListener("click", function () {
  // Call search function when button is clicked
  weather.search();
});

// Event listener for key press in search bar
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    // Call search function if Enter key is pressed
    if (event.key == "Enter") {
      weather.search();
    }
  });

// Fetch initial weather data for Atlanta
weather.fetchWeather("Los Angeles");
