function showWeather(){

let cityInput = document.querySelector("input").value;

document.getElementById("city").innerHTML = cityInput;

document.getElementById("temp").innerHTML = "30°C";

document.getElementById("condition").innerHTML = "Cloudy";

}
