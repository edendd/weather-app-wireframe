let weather = {
  "paris": {
    temp: 19.7,
    humidity: 80
  },
  "tokyo": {
    temp: 17.3,
    humidity: 50
  },
  "lisbon": {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  "moscow": {
    temp: -5,
    humidity: 20
  }
};
//console.log(weather)
let city = prompt("Please enter a city name ?");
city = city.toLowerCase();


const fahrenheit = (weather[city].temp * 1.8) + 32

if (weather[city] !== undefined) {
  alert(
  
    `It is currently ${Math.round(weather[city].temp)}ºC  (${Math.round(fahrenheit)}ºF ) in ${city} with a humidity of ${weather[city].humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}