// let weather = {
//   "paris": {
//     temp: 19.7,
//     humidity: 80
//   },
//   "tokyo": {
//     temp: 17.3,
//     humidity: 50
//   },
//   "lisbon": {
//     temp: 30.2,
//     humidity: 20
//   },
//   "san francisco": {
//     temp: 20.9,
//     humidity: 100
//   },
//   "moscow": {
//     temp: -5,
//     humidity: 20
//   }
// };
// //console.log(weather)
// let city = prompt("Please enter a city name ?");
// city = city.toLowerCase();


// const fahrenheit = (weather[city].temp * 1.8) + 32

// if (weather[city] !== undefined) {
//   alert(
  
//     `It is currently ${Math.round(weather[city].temp)}ºC  (${Math.round(fahrenheit)}ºF ) in ${city} with a humidity of ${weather[city].humidity}%`
//   );
// } else {
//   alert(
//     `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//   );
// }
//challenge 1
let now = new Date()
let tellData = document.querySelector("#dateView")

 let date = now.getDate();
 let hours = now.getHours();
 let min = now.getMinutes();
 let sec = now.getSeconds()
 let year = now.getFullYear()

let days = ["Sun",'Mon','Tue','Wed','Thu','Fri','Sat']
let day = days[now.getDay()]
let months = ["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
];
let month = months[now.getMonth()];

 dateView.innerHTML = `${day} ${month} ${date}, ${hours}:${min} ${year} `
 console.log(dateView)

//Challenge 2

 function search(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");

  //console.log(input.value);

  let h1 = document.querySelector("h1")
  h1.innerHTML = `${input.value}`
 }
 let form = document.querySelector("#search");
 form.addEventListener("submit", search);


//Challenge 3

function convertToCelsius(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#Temp");
  currentTemperature.innerHTML = "55°";
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#Temp");
  currentTemperature.innerHTML = "19°";
}

let celsiusLink = document.querySelector("#Clink");
celsiusLink.addEventListener("click", convertToCelsius);

let fahrenheitLink = document.querySelector("#Flink");
fahrenheitLink.addEventListener("click", convertToFahrenheit);





