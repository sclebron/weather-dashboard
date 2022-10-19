let apiKey = 'a5ceee039d9340faa7953b042ac20168';
let cityInput = document.querySelector("#search");
let searchBtn = document.querySelector("#search-btn");
let tempEl = document.getElementById("temperature");
let humidityEl = document.getElementById("humidity");
let windEl = document.getElementById("wind");
let forecastDiv = document.getElementById("forecast");
let weatherDashboard = document.getElementById("city");
let date = new Date().toUTCString().slice(5, 16);


