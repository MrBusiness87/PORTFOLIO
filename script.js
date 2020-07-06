document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});

function currentlocationWeather() {
  let apiKey = "7fbb8b1345eeaff09ae91ba040de5772";
  navigator.geolocation.getCurrentPosition(function (position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    console.log(longitude);
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      apiKey;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      var iconcode = response.weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

      var city1 = $(".weather").append(
        "<div>" +
        "&emsp;" + response.name +
        "&ensp;Temp: " +
        ((response.main.temp - 273.15) * 1.8 + 32).toFixed(1) +
        "&#8457 <img id='wicon' src='' alt=''></div>"
      );

      $("#wicon").attr("src", iconurl);
    })
  })
}
currentlocationWeather();