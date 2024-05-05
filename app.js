let weather = {
  "apiKey": "8a2c658f6e6f76f1a19d5fb0e81fcc7d",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" 
      + city 
      + "&units=imperial&appId="
      + this.apiKey
      )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name }  = data; 
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

     // Round temperature and wind speed to remove decimal points
     const roundedTemp = temp.toFixed(0); 
     const roundedSpeed = speed.toFixed(0); 

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = roundedTemp + "°F";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " +  roundedSpeed + " mph";
      document.querySelector(".weather").classList.remove("loading");
     document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
},
search: function (){
  this.fetchWeather(document.querySelector(".search-bar").value);
}
};


document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event){
  if (event.key == "Enter") {
    weather.search();
  }
})

weather.fetchWeather("Abidjan");